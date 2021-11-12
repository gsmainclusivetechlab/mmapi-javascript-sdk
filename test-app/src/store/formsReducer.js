// action - state management
import * as actionTypes from "./actions";

export const initialState = {
  header: {},
  body: {},
};

// ===========================|| CUSTOMIZATION REDUCER ||=========================== //

const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_HEADER:
      return {
        ...state,
        header: action.header,
      };
    case actionTypes.UPDATE_BODY:
      return {
        ...state,
        body: action.body,
      };
    case actionTypes.RESET_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default formsReducer;
