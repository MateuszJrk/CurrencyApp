import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/currencyReducer";

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

export default store;
