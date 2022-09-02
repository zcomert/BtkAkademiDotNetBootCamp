import AuthorService from "../../services/authorService";
export const GETALL_AUTHORS = "GETALL_AUTHORS";
export const DELETE_ONE_AUTHOR = "DELETE_ONE_AUTHOR";
export const CREATE_ONE_AUTHOR = "CREATE_ONE_AUTHOR"; // action - reducer
export const GET_ONE_AUTHOR = "GET_ONE_AUTHOR";
export const UPDATE_ONE_AUTHOR = "UPDATE_ONE_AUTHOR";

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

export function createOneAuthor(author) {
  return function (dispatch) {
    authorService
      .createOneAuthor(author)
      .then((resp) => dispatch({ type: CREATE_ONE_AUTHOR, payload: resp }));
  };
}

export function getOneAuthor(id) {
  return function (dispatch) {
    authorService
      .getOneAuthor(id)
      .then((resp) => dispatch({ type: GET_ONE_AUTHOR, payload: resp }));
  };
}

export function updateOneAuthor(id, author) {
  return function (dispatch) {
    authorService
      .updateOneAuthor(id, author)
      .then((resp) => dispatch({ type: UPDATE_ONE_AUTHOR, payload: resp }));
  };
}
