
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from "../../components/Layout";


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
        minHeight: 200
    },
    alignRight: {
        textAlign: 'right'
    },
    flex: {
        display: 'flex'
    },
    grow: {
        flexGrow: 1
    }
}));

function getSteps() {
    return ['Upload do PDF', 'Dados dos clientes', 'Executar'];
}

function Page(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.page}>
            {props.children}
        </Paper>
    )
}

export function Wizard() {
    const classes = useStyles();
    const [files, setFiles] = React.useState([]);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const router = useRouter();

    const handleExecute = () => {
        router.push("/?success=Sucesso!");
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const isNextDisabled = (activeStep) => {
        if (activeStep == 0) {
            return files.length == 0;
        }
        return false;
    }

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return (
                    <DropzoneArea
                        dialogTitle="Upload do PDF"
                        cancelButtonText="Cancelar"
                        submitButtonText="Enviar"
                        dropzoneText="Arraste um PDF aqui ou clique"
                        onChange={(files) => {
                            setFiles(files)
                        }}
                        acceptedFiles={['application/pdf']}
                        previewText="Arquivos para assinar:"
                        showAlerts={false}
                        showPreviews={false}
                        showPreviewsInDropzone={true}
                        showFileNames={true}
                        showFileNamesInPreview={true}
                        filesLimit={1}
                        maxFileSize={5000000}
                        getFileAddedMessage={(fileName) => `Arquivo ${fileName} adicionado com sucesso.`}
                        getFileLimitExceedMessage={(filesLimit) => `Número máximo de arquivos excedido. Escolha apenas ${filesLimit}`}
                        getFileRemovedMessage={(fileName) => `Arquivo ${fileName} removido.`}
                        getDropRejectMessage={(rejectedFile) => `Arquivo ${rejectedFile.name} não é válido.`}
                    />
                );
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            case 2:
                return 'All steps completed';
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
                <Page>
                    {getStepContent(activeStep)}
                </Page>

                {activeStep === steps.length ? (
                    <Button variant="contained" color="info" onClick={handleReset}>
                        Começar um novo
                    </Button>
                ) : (
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
                                <Button variant="contained" color="secondary" onClick={handleExecute}>
                                    Executar
                                </Button>
                            ) : (
                                <Button variant="contained" color="secondary" onClick={handleNext} disabled={isNextDisabled(activeStep)}>
                                    Próximo
                                </Button>
                            )}

                        </div>
                    </div>
                )}

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