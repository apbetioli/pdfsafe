import { Button, Dialog, DialogContent, makeStyles } from "@material-ui/core";
import React from "react";
import { Wizard } from ".";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        padding: '16px 24px',
        margin: 0,
        width: '100%'
    },
}))

export default function WizardDialog(props) {
    const classes = useStyles();
    return (
        <Dialog
            fullWidth={true}
            maxWidth="md"
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="dialog-title"
        >
            <h2 id="dialog-title" className={classes.title}>
                <span>Assinar PDF</span>
                <span className={classes.grow}> </span>
                <Button onClick={props.onClose}>X</Button>
            </h2>
            <DialogContent>
                <Wizard onClose={props.onClose} />
            </DialogContent>
        </Dialog>
    )
}