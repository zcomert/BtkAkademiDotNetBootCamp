import { GETALL_AUTHORS } from "../actions/authorActions";
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
    default:
      return {
        ...state,
      };
  }
}
