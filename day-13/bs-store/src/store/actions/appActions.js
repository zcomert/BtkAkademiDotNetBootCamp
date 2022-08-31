export const SET_THEME = "SET_THEME";
export const OPEN_SNACKBAR = "OPEN_SNACKBAR";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const SET_LOADING = "SET_LOADING";

export function setLoading(key){
  return function (dispatch){
      return dispatch({type:SET_LOADING, payload:key});
  }
}

export function setTheme(theme) {
  return function (dispatch) {
    return dispatch({ type: SET_THEME, payload: theme });
  };
}

export function openSnackbar(snackbar){
  return function(dispatch){
    return dispatch({type:OPEN_SNACKBAR, payload:snackbar})
  }
}

export function closeSnackbar(){
  return function(dispatch){
    return dispatch({type:CLOSE_SNACKBAR})
  }
}