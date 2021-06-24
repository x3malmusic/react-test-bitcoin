import React from "react";
import { Typography, Box } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import useStyles from "./styles";

export default function MyWallet({ userBitcoins, deposit, withdraw }) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.text}>
        Your Bitcoin wallet
      </Typography>
      <Typography className={classes.text}>
        {`You now own ${userBitcoins} Bitcoins`}
      </Typography>

      <Box className={classes.buttonContainer}>
        <AppButton className={classes.btn} onClick={deposit}>Deposit 100$</AppButton>
        <AppButton onClick={withdraw}>Withdraw 100$</AppButton>
      </Box>
    </>
  )
}