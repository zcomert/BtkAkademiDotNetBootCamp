import {combineReducers} from "redux";
import { appReducer } from "./reducers/appReducer";
import authorReducer from "./reducers/authorReducer";
import bookReducer from "./reducers/bookReducer";
const rootReducer = combineReducers({
    app : appReducer,
    author : authorReducer,
    book : bookReducer
});

export default rootReducer;