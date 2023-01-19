import { legacy_createStore as createStore } from "redux"; 
import accountReducer from "./accountReducer"

export const store = createStore(
    accountReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

