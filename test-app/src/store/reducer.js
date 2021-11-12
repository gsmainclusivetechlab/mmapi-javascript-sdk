import { combineReducers } from "redux";

// reducer import
import customizationReducer from "./customizationReducer";
import formsReducer from "./formsReducer";
import clipboardReducer from "./clipboardReducer";
// ===========================|| COMBINE REDUCER ||=========================== //

const reducer = combineReducers({
  customization: customizationReducer,
  formData: formsReducer,
  clipboard: clipboardReducer,
});

export default reducer;
