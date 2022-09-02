export const SET_USER = "SET_USER";

export function setUser(user) {
  return function (dispatch) {
    return dispatch({ type: SET_USER, payload: user });
  };
}
