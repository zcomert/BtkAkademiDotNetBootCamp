import BookService from "../../services/bookService";

export const GETALL_BOOKS = "GETALL_BOOKS"; // action - reducer
export const GET_ONE_BOOK_WITH_DETAILS = "GET_ONE_BOOK_WITH_DETAILS";

const bookService = new BookService();

export function getAllBooks() {
  return function (dispatch) {
    bookService
      .getAllBooks()
      .then((resp) => dispatch({ type: GETALL_BOOKS, payload: resp }));
  };
}
export function getOneBookWithDetails(id) {
  return function (dispatch) {
    bookService
      .getOneBookWithDetails(id)
      .then((resp) => dispatch({ type: GET_ONE_BOOK_WITH_DETAILS, payload: resp }));
  };
}
