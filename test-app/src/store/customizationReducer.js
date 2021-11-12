// project imports
import config from "config";

// action - state management
import * as actionTypes from "./actions";

export const initialState = {
  isOpen: [], // for active default menu
  pageData: {},
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
};

// ===========================|| CUSTOMIZATION REDUCER ||=========================== //

const customizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      let {
        id,
        title,
        headers,
        params,
        requestType,
        requestCategory,
        polling,
        returnClientCorrelation,
      } = action.item;
      return {
        ...state,
        isOpen: [id],
        pageData: {
          pageTitle: title,
          apiHeaders: headers,
          apiParams: params,
          requestType: requestType,
          requestCategory: requestCategory,
          polling: polling,
          returnClientCorrelation: returnClientCorrelation,
        },
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened,
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily,
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius,
      };
    case actionTypes.SET_AUTH:
      let { authType, authParams } = action;
      return {
        ...state,
        authType,
        authParams,
      };
    default:
      return state;
  }
};

export default customizationReducer;
