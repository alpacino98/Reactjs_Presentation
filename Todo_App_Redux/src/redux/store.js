import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers/combineReducers";
import logger from "redux-logger";

export default createStore(combineReducers, applyMiddleware(logger));