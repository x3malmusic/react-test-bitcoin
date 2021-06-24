import { SET_HISTORY_MESSAGE} from "../actions/types";

const initialState = {
  messages: [],
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY_MESSAGE:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default history
