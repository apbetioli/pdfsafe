
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { DropzoneArea } from 'react-mui-dropzone';
import Layout from "../../components/Layout";
import ManualData from './manualdata';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    page: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        minHeight: 250
    },
    alignRight: {
        textAlign: 'right'
    },
    flex: {
        display: 'flex'
    },
    grow: {
        flexGrow: 1
    },
    dropzone: {
        minHeight: 150
    }
}));

function getSteps() {
    return ['Upload do PDF', 'Dados dos clientes', 'Executar'];
}

function WizardPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.page}>
            {props.children}
        </div>
    )
}

export function Wizard({ onClose, step }) {
    const classes = useStyles();
    const [files, setFiles] = React.useState([]);
    const [spreadsheets, setSpreadsheets] = React.useState([]);
    const [activeStep, setActiveStep] = React.useState(step | 0);
    const steps = getSteps();
    const [importMode, setImportMode] = React.useState("manually");

    const handleChangeImportMode = (event) => {
        setImportMode(event.target.value);
    }

    const handleExecute = (event) => {
        if (onClose) {
            event.message = 'Processando!';
            onClose(event);
        }
    };

    const handleNext = () => {
        if (activeStep == steps.length - 1) {
            handleExecute();
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const isNextDisabled = (activeStep) => {
        if (activeStep == 0)
            return files.length == 0;
        else if (activeStep == 2)
            if (importMode != "manually")
                return spreadsheets.length == 0

        return false;
    }

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return (
                    <DropzoneArea
                        dropzoneText="Arraste um PDF aqui ou clique"
                        dropzoneClass={classes.dropzone}
                        onChange={setFiles}
                        acceptedFiles={['application/pdf']}
                        previewText="Arquivo para assinar:"
                        showAlerts={false}
                        showPreviews={true}
                        showPreviewsInDropzone={false}
                        showFileNames={true}
                        showFileNamesInPreview={true}
                        useChipsForPreview={true}
                        filesLimit={1}
                        initialFiles={files}
                        maxFileSize={5000000}
                        getFileAddedMessage={(fileName) => `Arquivo ${fileName} adicionado com sucesso.`}
                        getFileLimitExceedMessage={(filesLimit) => `Número máximo de arquivos excedido. Escolha apenas ${filesLimit}`}
                        getFileRemovedMessage={(fileName) => `Arquivo ${fileName} removido.`}
                        getDropRejectMessage={(rejectedFile) => `Arquivo ${rejectedFile.name} não é válido.`}
                    />
                );
            case 1:
                return (
                    <>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Como deseja incluir os dados dos clientes?</FormLabel>
                            <RadioGroup name="importMode" value={importMode} onChange={handleChangeImportMode}>
                                <FormControlLabel value="manually" control={<Radio />} label="Manualmente" />
                                <FormControlLabel value="import" control={<Radio />} label="Importar planilha CSV" />
                            </RadioGroup>
                        </FormControl>
                        <p>
                            <a href="">Baixar modelo de planilha CSV</a>
                        </p>
                    </>
                );
            case 2: {
                if (importMode === "manually")
                    return (
                        <ManualData />
                    );
                else {
                    return (
                        <>
                            <DropzoneArea
                                dropzoneText="Arraste uma planilha CSV aqui ou clique"
                                dropzoneClass={classes.dropzone}
                                onChange={setSpreadsheets}
                                acceptedFiles={['.csv']}
                                previewText="Planilha CSV carregado:"
                                showAlerts={false}
                                showPreviews={true}
                                showPreviewsInDropzone={false}
                                showFileNames={true}
                                showFileNamesInPreview={true}
                                useChipsForPreview={true}
                                filesLimit={1}
                                initialFiles={spreadsheets}
                                maxFileSize={5000000}
                                getFileAddedMessage={(fileName) => `Arquivo ${fileName} adicionado com sucesso.`}
                                getFileLimitExceedMessage={(filesLimit) => `Número máximo de arquivos excedido. Escolha apenas ${filesLimit}`}
                                getFileRemovedMessage={(fileName) => `Arquivo ${fileName} removido.`}
                                getDropRejectMessage={(rejectedFile) => `Arquivo ${rejectedFile.name} não é válido.`}
                            />
                        </>
                    )
                }
            }
            default:
                return 'OPS...';
        }
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                <WizardPage>
                    {getStepContent(activeStep)}
                </WizardPage>

                <div className={classes.flex}>
                    <div className={classes.grow} />
                    {activeStep > 0 && (
                        <div>
                            <Button
                                variant="outlined"
                                color="secondary"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Voltar
                            </Button>
                        </div>)}
                    <div>
                        {activeStep === steps.length - 1 ? (
                            <Button variant="contained" color="secondary" onClick={handleExecute} disabled={isNextDisabled(activeStep)}>
                                Assinar
                            </Button>
                        ) : (
                            <Button variant="contained" color="secondary" onClick={handleNext} disabled={isNextDisabled(activeStep)}>
                                Próximo
                            </Button>
                        )}
                    </div>
                </div>

            </div>
        </div >
    );
}

export default function WizardIndex() {
    return (
        <Layout>
            <Wizard />
        </Layout>
    )
}