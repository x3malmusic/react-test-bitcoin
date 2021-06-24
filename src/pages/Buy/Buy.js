import React from "react";
import { Typography } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import { buyPricesLow, buyPricesHigh } from "../../constants/messages";
import useStyles from "./styles";

export default function Buy({ bitcoinPrice, currentBitCoinPrice, buy }) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.text}>
        {`Bitcoin price is ${currentBitCoinPrice}$`}
      </Typography>
      <Typography className={classes.text}>
        {currentBitCoinPrice >= bitcoinPrice * 10 ? buyPricesHigh : buyPricesLow}
      </Typography>
        <AppButton onClick={buy}>Buy 1 Bitcoin</AppButton>
    </>
  )
};