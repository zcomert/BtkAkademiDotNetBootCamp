export const SET_THEME = "SET_THEME";

export function setTheme(theme) {
  return function (dispatch) {
    return dispatch({ type: SET_THEME, payload: theme });
  };
}
