import { bitcoinPrice } from "./index";

export const BUY_ERROR = "BUY_ERROR";
export const SELL_ERROR = "SELL_ERROR";
export const BITCOIN_MINIMUM_ERROR = "BITCOIN_MINIMUM_ERROR";
export const DEPOSIT_ERROR = "DEPOSIT_ERROR";

const errorMessages = {
  [BUY_ERROR]: `You don't have enough money`,
  [SELL_ERROR]: `You don't have any bitcoins to sell`,
  [BITCOIN_MINIMUM_ERROR]: `Bitcoin price cannot be below ${bitcoinPrice}$`,
  [DEPOSIT_ERROR]: `You have no money to deposit`,
}

export default errorMessages