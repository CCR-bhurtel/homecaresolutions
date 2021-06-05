import React, { useState, useEffect, makeStyles } from "react";
import { Grid, TextField } from "@material-ui/core";

function Index() {


  return (
    <>
      <form className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Full Name"
              value={values.fullName}
            />
            <TextField variant="outlined" label="date" value={values.date} />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </form>
    </>
  );
}

export default Index;
