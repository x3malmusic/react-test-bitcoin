import { SET_BITCOIN_RATIO, SET_USER_BITCOINS, SET_USER_MONEY } from "../actions/types";

const initialState = {
  userMoney: 200,
  userBitcoins: 0,
  bitCoinRatio: 1,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_BITCOIN_RATIO:
      return {
        ...state,
        bitCoinRatio: action.payload,
      };
    case SET_USER_MONEY:
      return {
        ...state,
        userMoney: action.payload,
      };
    case SET_USER_BITCOINS:
      return {
        ...state,
        userBitcoins: action.payload,
      };
    default:
      return state;
  }
};

export default user
