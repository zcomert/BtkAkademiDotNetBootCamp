import { CREATE_ONE_AUTHOR, DELETE_ONE_AUTHOR, GETALL_AUTHORS, GET_ONE_AUTHOR, UPDATE_ONE_AUTHOR } from "../actions/authorActions";
import { authors,author } from "../initials/authorItems";

const initialVales = {
  authors,
  author
};
export default function authorReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case CREATE_ONE_AUTHOR:
      return {
        ...state,
        authors : [...state.authors, payload] //   [{}, {}, {}, {x}]
      }
    case GETALL_AUTHORS:
      return {
        ...state, // author
        authors: payload,
      };
    case GET_ONE_AUTHOR:
      return{
        ...state,
        author : payload
      }
    case DELETE_ONE_AUTHOR:
      return{
        ...state,
        authors : state.authors.filter(a => a.authorId!==payload)
      }   
    case UPDATE_ONE_AUTHOR:
      return {
        ...state,
        authors : [...state.authors.filter(a => a.authorId!==payload.authorId), payload]
      }
    default:
      return {
        ...state,
      };
  }
}
