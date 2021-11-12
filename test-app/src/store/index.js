import { createStore } from "redux";
import reducer from "./reducer";

// ===========================|| REDUX - MAIN STORE ||=========================== //

const store = createStore(
  reducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persister = "Demo";

export { store, persister };
