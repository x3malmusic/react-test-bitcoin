import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";
import bitcoin from "../../assets/bitcoin.svg";

export default function Header({ userMoney, userBitcoins, bitCoinPrice }) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Box className={classes.logo}>
        <img src={bitcoin} alt="img" className={classes.logoImg} />
        <Typography variant="h5" className={classes.logoText}>
          BITCOIN FRENZY
        </Typography>
      </Box>

      <Typography className={classes.logoText}>
        {`1 BITCOIN = ${bitCoinPrice}$`}
      </Typography>

      <Box>
        <Typography className={classes.logoText}>
          {`${userMoney}$`}
        </Typography>
        <Typography className={classes.logoText}>
          {`${userBitcoins} BITCOINS`}
        </Typography>
      </Box>
    </header>
  )
}



