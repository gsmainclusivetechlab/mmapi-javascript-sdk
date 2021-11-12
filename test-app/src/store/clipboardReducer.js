// action - state management
import * as actionTypes from "./actions";

export const initialState = [];

// ===========================|| CUSTOMIZATION REDUCER ||=========================== //

const clipboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CLIPBOARD:
      return [...state, action.data];
    case actionTypes.DELETE_FROM_CLIPBOARD:
      return state.filter((item) => item !== action.data);
    case actionTypes.RESET_CLIPBOARD:
      return initialState;
    default:
      return state;
  }
};

export default clipboardReducer;
