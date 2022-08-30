import AuthorService from "../../services/authorService";
export const GETALL_AUTHORS = "GETALL_AUTHORS";

const authorService = new AuthorService();

export function getAllAuthors() {
  return function (dispatch) {
    authorService
      .getAllAuthors()
      .then((resp) => dispatch({ type: GETALL_AUTHORS, payload: resp }));
  };
}
