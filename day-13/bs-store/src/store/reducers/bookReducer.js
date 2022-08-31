import { GETALL_BOOKS } from "../actions/bookActions";
import {books} from "../initials/bookItems";

const initialValue = {
    books
}

export default function bookReducer(state=initialValue,{type,payload}){
    switch (type) {
        case GETALL_BOOKS:
            return {
                ...state,
                books : payload
            }
        default:
           return{
            ...state
           };
    }
}