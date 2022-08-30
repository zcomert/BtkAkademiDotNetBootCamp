import { DELETE_ONE_AUTHOR, GETALL_AUTHORS } from "../actions/authorActions";
import { authors } from "../initials/authorItems";

const initialVales = {
  authors,
};
export default function authorReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case GETALL_AUTHORS:
      return {
        ...state, // author
        authors: payload,
      };
    case DELETE_ONE_AUTHOR:
      return{
        ...state,
        authors : state.authors.filter(a => a.authorId!==payload)
      }
    default:
      return {
        ...state,
      };
  }
}
