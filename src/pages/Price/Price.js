import React from "react";
import { Box, Typography } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import useStyles from "./styles";

export default function Price({ currentBitCoinPrice, increase, decrease }) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.text}>
        {`Bitcoin price is ${currentBitCoinPrice}$`}
      </Typography>

      <Box className={classes.buttonContainer}>
        <AppButton className={classes.btn} onClick={increase}>Increase Bitcoin Price(+1,000)</AppButton>
        <AppButton className={classes.btn} onClick={decrease}>Decrease Bitcoin Price(-1,000)</AppButton>
      </Box>
    </>
  )
};