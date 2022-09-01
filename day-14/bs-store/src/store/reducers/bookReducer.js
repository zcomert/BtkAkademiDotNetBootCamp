import { GETALL_BOOKS, GET_ONE_BOOK_WITH_DETAILS } from "../actions/bookActions";
import {books, book} from "../initials/bookItems";

const initialValue = {
    books,
    book
}

export default function bookReducer(state=initialValue,{type,payload}){
    switch (type) {
        case GETALL_BOOKS:
            return {
                ...state,
                books : payload
            }
        case GET_ONE_BOOK_WITH_DETAILS:
            return{
                ...state,
                book : payload
            }
        default:
           return{
            ...state
           };
    }
}