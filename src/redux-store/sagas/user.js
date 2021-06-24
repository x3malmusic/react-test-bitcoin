import { takeLatest, put, select } from "redux-saga/effects";
import {
  INCREASE_BITCOIN_PRICE,
  DECREASE_BITCOIN_PRICE,
  SET_BITCOIN_RATIO,
  BUY_BITCOIN,
  SELL_BITCOIN,
  SET_USER_MONEY,
  ERROR,
  SET_USER_BITCOINS,
  HISTORY_EVENT,
  DEPOSIT,
  WITHDRAW
} from "../actions/types";
import { bitcoinPrice, deposit, withdraw } from "../../constants";
import {
  BITCOIN_MINIMUM_ERROR,
  BUY_ERROR,
  SELL_ERROR,
  DEPOSIT_ERROR
} from "../../constants/errorMessages";

const inreaseBitcoinPrice = function* ({ type }) {
  const bitCoinRatio = yield select(state => state.user.bitCoinRatio);
  yield put({ type: SET_BITCOIN_RATIO, payload: bitCoinRatio + 1 });
  yield put({ type: HISTORY_EVENT, payload: type });
};

const decreaseBitcoinPrice = function* ({ type }) {
  const bitCoinRatio = yield select(state => state.user.bitCoinRatio);

  if (bitCoinRatio <= 1) {
    return yield put({ type: ERROR, payload: BITCOIN_MINIMUM_ERROR })
  }

  yield put({ type: SET_BITCOIN_RATIO, payload: bitCoinRatio - 1 });
  yield put({ type: HISTORY_EVENT, payload: type });
};

const buyBitcoin = function* ({ type }) {
  const userMoney = yield select(state => state.user.userMoney);
  const ratio = yield select(state => state.user.bitCoinRatio);
  const preResult = yield userMoney - ratio * bitcoinPrice;

  if (preResult < 0) {
    return yield put({ type: ERROR, payload: BUY_ERROR })
  }

  const userBitcoins = yield select(state => state.user.userBitcoins);

  yield put({ type: SET_USER_MONEY, payload: preResult });
  yield put({ type: SET_USER_BITCOINS, payload: userBitcoins + 1 });
  yield put({ type: HISTORY_EVENT, payload: type });
};

const sellBitcoin = function* ({ type }) {
  const userBitcoins = yield select(state => state.user.userBitcoins);

  if (userBitcoins <= 0) {
    return yield put({ type: ERROR, payload: SELL_ERROR })
  }

  const userMoney = yield select(state => state.user.userMoney);
  const ratio = yield select(state => state.user.bitCoinRatio);
  const preResult = userMoney + ratio * bitcoinPrice;

  yield put({ type: SET_USER_MONEY, payload: preResult });
  yield put({ type: SET_USER_BITCOINS, payload: userBitcoins - 1 });
  yield put({ type: HISTORY_EVENT, payload: type });
};

const makeDeposit = function* ({ type }) {
  const userMoney = yield select(state => state.user.userMoney);
  const preResult = userMoney - deposit;

  if (preResult < 0) {
    return yield put({ type: ERROR, payload: DEPOSIT_ERROR })
  }

  yield put({ type: SET_USER_MONEY, payload: preResult });
  yield put({ type: HISTORY_EVENT, payload: type });
};

const makeWithdraw = function* ({ type }) {
  const userMoney = yield select(state => state.user.userMoney);
  const preResult = userMoney + withdraw;

  yield put({ type: SET_USER_MONEY, payload: preResult });
  yield put({ type: HISTORY_EVENT, payload: type });
};

const userSagas = [
  takeLatest(INCREASE_BITCOIN_PRICE, inreaseBitcoinPrice),
  takeLatest(DECREASE_BITCOIN_PRICE, decreaseBitcoinPrice),
  takeLatest(BUY_BITCOIN, buyBitcoin),
  takeLatest(SELL_BITCOIN, sellBitcoin),
  takeLatest(DEPOSIT, makeDeposit),
  takeLatest(WITHDRAW, makeWithdraw),
];

export default userSagas;
