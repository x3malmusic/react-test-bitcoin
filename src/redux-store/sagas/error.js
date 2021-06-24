import { takeLatest } from "redux-saga/effects";
import {
  ERROR,
} from "../actions/types";
import errorMessages from "../../constants/errorMessages";
import { notify } from "../../utils/notifications";

const setErrorMessage = function* ({ payload }) {
  yield notify({ message: errorMessages[payload], type: 'danger', title: 'Error' });
};

const historySagas = [
  takeLatest(ERROR, setErrorMessage),
];

export default historySagas;