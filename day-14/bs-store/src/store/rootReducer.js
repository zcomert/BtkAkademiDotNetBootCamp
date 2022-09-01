import {combineReducers} from "redux";
import { appReducer } from "./reducers/appReducer";
import authorReducer from "./reducers/authorReducer";
import bookReducer from "./reducers/bookReducer";
import  categoryReducer  from "./reducers/categoryReducer";
const rootReducer = combineReducers({
    app : appReducer,
    author : authorReducer,
    book : bookReducer,
    category : categoryReducer
});

export default rootReducer;