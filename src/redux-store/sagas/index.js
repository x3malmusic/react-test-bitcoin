import { all } from "redux-saga/effects";
import history from "./history";
import user from "./user";
import error from "./error";

function* rootSaga() {
  return yield all([...history, ...user, ...error]);
}

export default rootSaga;