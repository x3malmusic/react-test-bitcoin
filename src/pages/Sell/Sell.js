import React from "react";
import { Typography } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import { sellPricesLow, sellPricesHigh } from "../../constants/messages";
import useStyles from "./styles";

export default function Sell({ bitcoinPrice, currentBitCoinPrice, sell }) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.text}>
        {`Bitcoin price is ${currentBitCoinPrice}$`}
      </Typography>
      <Typography className={classes.text}>
        {currentBitCoinPrice >= bitcoinPrice * 10 ? sellPricesHigh : sellPricesLow}
      </Typography>
      <AppButton onClick={sell}>Sell 1 Bitcoin</AppButton>
    </>
  )
}