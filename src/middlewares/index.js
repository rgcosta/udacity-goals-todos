import checker from "./checker";
import logger from "./logger";
import ReduxThunk from 'redux-thunk';
import { applyMiddleware } from "redux";

export default applyMiddleware(
    ReduxThunk,
    checker,
    logger
)