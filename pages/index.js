import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import React from "react";
import Layout from "../components/Layout";
import History from "./history";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Home(props) {

  const [open, setOpen] = React.useState(props.success);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Layout {...props}>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
      >
        <Alert onClose={handleClose} severity="success">
          {props.success}
        </Alert>
      </Snackbar>

      <History />

    </Layout>
  )
}

export async function getServerSideProps(context) {
  const success = context.query.success ? context.query.success : false;
  return {
    props: {
      success
    },
  }
}