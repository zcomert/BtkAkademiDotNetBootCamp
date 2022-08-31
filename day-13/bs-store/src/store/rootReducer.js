import {combineReducers} from "redux";
import { appReducer } from "./reducers/appReducer";
import authorReducer from "./reducers/authorReducer";
const rootReducer = combineReducers({
    app : appReducer,
    author : authorReducer
});

export default rootReducer;