import {
  INCREASE_BITCOIN_PRICE,
  DECREASE_BITCOIN_PRICE,
  BUY_BITCOIN,
  SELL_BITCOIN,
  DEPOSIT,
  WITHDRAW
} from "./types";

export const increaseBitcoinPrice = () => ({
  type: INCREASE_BITCOIN_PRICE,
});

export const decreaseBitcoinPrice = () => ({
  type: DECREASE_BITCOIN_PRICE,
});

export const buyBitcoin = () => ({
  type: BUY_BITCOIN,
});

export const sellBitcoin = () => ({
  type: SELL_BITCOIN,
});

export const deposit = () => ({
  type: DEPOSIT,
});

export const withdraw = () => ({
  type: WITHDRAW,
});