import { Grid, Link, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    alignItems: "center",
    display: "flex",
    fontSize: "0.675rem",
    justifyContent: "center",
    height: 50,
    textAlign: "center"
  },
  footerLink: {
    fontWeight: "bold",
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid>
        <Grid item lg={12}>
          <Link className={classes.footerLink} href="/politica-de-privacidade" target="_blank" rel="noopener">Política de privacidade</Link>
          {" - "}
          <Link className={classes.footerLink} href="/termos-de-uso" target="_blank" rel="noopener">Termos de uso</Link>
        </Grid>
        <Grid item lg={12}>
          &copy; 2021 PDF Safe
          </Grid>
      </Grid>
    </footer >
  );
}
