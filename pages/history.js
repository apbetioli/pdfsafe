import { Snackbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';
import WizardDialog from './wizard/dialog';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, '03/04/2021 16:01:05', 159, 6.0, 24, 4.0),
  createData(2, '03/04/2021 16:01:05', 237, 9.0, 37, 4.3),
  createData(3, '03/04/2021 16:01:05', 262, 16.0, 24, 6.0),
  createData(4, '03/04/2021 16:01:05', 305, 3.7, 67, 4.3),
  createData(5, '03/04/2021 16:01:05', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  title: {
    marginBottom: 10,
  },
  alignRight: {
    alignSelf: 'center',
    textAlign: "right",
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function History(props) {
  const classes = useStyles();

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarStatus, setSnackbarStatus] = React.useState('OK');

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  }

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = (event) => {
    setOpenDialog(false);
    
    if (event.message) {
      setSnackbarOpen(true)
      setSnackbarStatus(event.message)
    }

  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        autoHideDuration={6000}
      >
        <Alert onClose={handleCloseSnackbar} severity="info">
          {snackbarStatus}
        </Alert>
      </Snackbar>

      <WizardDialog open={openDialog} onClose={handleCloseDialog} />

      <Grid container className={classes.title}>
        <Grid item xs={6}>
          <h2>Histórico</h2>
        </Grid>
        <Grid item className={classes.alignRight} xs={6}>
          <Button variant="contained" color="secondary" onClick={handleOpenDialog} >
            Assinar PDF
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Data</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}