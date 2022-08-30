import AuthorService from "../../services/authorService";
export const GETALL_AUTHORS = "GETALL_AUTHORS";
export const DELETE_ONE_AUTHOR = "DELETE_ONE_AUTHOR";

const authorService = new AuthorService();

export function getAllAuthors() {
  return function (dispatch) {
    authorService
      .getAllAuthors()
      .then((resp) => dispatch({ type: GETALL_AUTHORS, payload: resp }));
  };
}

export function deleteOneAuthor(id) {
  return function (dispatch) {
    authorService
      .deleteOneAuthor(id)
      .then((resp) => dispatch({ type: DELETE_ONE_AUTHOR, payload: id }));
  };
}
