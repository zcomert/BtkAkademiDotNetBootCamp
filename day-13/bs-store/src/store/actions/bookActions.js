import BookService from "../../services/bookService";

export const GETALL_BOOKS = "GETALL_BOOKS";  // action - reducer

const bookService = new BookService();

export function getAllBooks(){
    return function(dispatch){
        bookService
        .getAllBooks()
        .then(resp => dispatch({type:GETALL_BOOKS, payload:resp}))
    }
}