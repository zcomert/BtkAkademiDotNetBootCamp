import { OPEN_SNACKBAR, SET_THEME } from "../actions/appActions";
import { theme, snackbar } from "../initials/appItems";

const initialValue = {
  theme,
  snackbar
};

export function appReducer(state = initialValue, { type, payload }) {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    case OPEN_SNACKBAR:
      return{
        ...state,
        snackbar:{
          isOpen : true,
          message: payload.message,
          severity: payload.severity
        }
      }
    default:
      return {
        ...state,
      };
  }
}
