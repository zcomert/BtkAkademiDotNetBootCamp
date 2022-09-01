import {
  CREATE_ONE_CATEGORY,
  DELETE_ONE_CATEGORY,
  GETALL_CATEGORIES,
  GET_ONE_CATEGORY,
  UPDATE_ONE_CATEGORY,
} from "../actions/categoryActions";
import { categories, category } from "../initials/categoryItems";

const init = {
  categories,
  category,
};

export function categoryReducer(state = init, { type, payload }) {
  switch (type) {
    case GETALL_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case GET_ONE_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case CREATE_ONE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    case UPDATE_ONE_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories.filter(
            (c) => c.categoryId !== payload.categoryId
          ),
          payload,
        ],
      };
    case DELETE_ONE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((c) => c.categoryId !== payload),
      };

    default:
      return {
        ...state,
      };
  }
}
