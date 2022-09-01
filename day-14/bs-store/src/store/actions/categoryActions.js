import CategoryService from "../../services/categoryService";

export const GETALL_CATEGORIES = "GETALL_CATEGORIES";
export const GET_ONE_CATEGORY = "GET_ONE_CATEGORY";
export const CREATE_ONE_CATEGORY = "CREATE_ONE_CATEGORY";
export const UPDATE_ONE_CATEGORY = "UPDATE_ONE_CATEGORY";
export const DELETE_ONE_CATEGORY = "DELETE_ONE_CATEGORY";

const categoryService = new CategoryService();

export function getAllCategories() {
  return function (dispatch) {
    categoryService
      .getAllCategories()
      .then((resp) => dispatch({ type: GETALL_CATEGORIES, payload: resp }));
  };
}

export function getOneCategory(id) {
  return function (dispatch) {
    categoryService
      .getOneCategory(id)
      .then((resp) => dispatch({ type: GET_ONE_CATEGORY, payload: resp }));
  };
}

export function createOneCategory(category) {
  return function (dispatch) {
    categoryService
      .createOneCategory(category)
      .then((resp) => dispatch({ type: CREATE_ONE_CATEGORY, payload: resp }));
  };
}

export function updateOneCategory(id,category) {
  return function (dispatch) {
    categoryService
      .updateOneCategory(id,category)
      .then((resp) => dispatch({ type: UPDATE_ONE_CATEGORY, payload: resp }));
  };
}

export function deleteOneCategory(id) {
  return function (dispatch) {
    categoryService
      .deleteOneCategory(id)
      .then((resp) => dispatch({ type: DELETE_ONE_CATEGORY, payload: resp }));
  };
}
