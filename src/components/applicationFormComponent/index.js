import React, { useState, useEffect, makeStyles } from "react";
import { Grid, TextField } from "@material-ui/core";

function Index() {
  const initialValues = {
    id: 0,
    fullName: "",
    date: "",
    address: "",
    phone: "",
    email: "",
    date_available: "",
    social_security: "",
    desired_salary: "",
    position_applied: "",
    certification: false,
    citizen: false,
    authorized: false,
    ever_worked_for_company: false,
    ever_convicted: false,
  };

  const useStyle = makeStyles((theme) => ({
    root: {
      "& .MuiFormControl-root": {
        width: "80%",
        margin: theme.spacing(1),
      },
    },
  }));

  const [values, setValues] = useState(initialValues);

  const classes = useStyle();

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
