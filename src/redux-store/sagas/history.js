import { takeLatest, put, select } from "redux-saga/effects";
import {
  SET_HISTORY_MESSAGE,
  HISTORY_EVENT
} from "../actions/types";
import historyMessages from "../../constants/historyMessages";

const setHistoryMessage = function* ({ payload }) {
  const messages = yield select(state => state.history.messages);
  const newMessages = [{ message: historyMessages[payload], date: new Date() }, ...messages]
  yield put({ type: SET_HISTORY_MESSAGE, payload: newMessages });
};

const historySagas = [
  takeLatest(HISTORY_EVENT, setHistoryMessage),
];

export default historySagas;
