import {
  bitcoinPrice,
  deposit,
  withdraw
} from "./index";
import {
  INCREASE_BITCOIN_PRICE,
  DECREASE_BITCOIN_PRICE,
  DEPOSIT,
  WITHDRAW,
  BUY_BITCOIN,
  SELL_BITCOIN
} from "../redux-store/actions/types";

const historyMessages = {
  [INCREASE_BITCOIN_PRICE]: `Increased Bitcoin price by ${bitcoinPrice}$`,
  [DECREASE_BITCOIN_PRICE]: `Decreased Bitcoin price by ${bitcoinPrice}$`,
  [DEPOSIT]: `${deposit}$ Deposit`,
  [WITHDRAW]: `${withdraw}$ Withdrawal`,
  [BUY_BITCOIN]: `Purchased 1 Bitcoin`,
  [SELL_BITCOIN]: `Sold 1 Bitcoin`,
}

export default historyMessages