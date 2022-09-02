import {
  CLOSE_SNACKBAR,
  OPEN_SNACKBAR,
  SET_LOADING,
  SET_THEME,
} from "../actions/appActions";
import { theme, snackbar, isLoaded } from "../initials/appItems";

const initialValue = {
  theme,
  snackbar,
  isLoaded,
};

export default function appReducer(state = initialValue, { type, payload }) {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbar: {
          open: true,
          message: payload.message,
          severity: payload.severity,
        },
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbar: {
          open: false,
          message: "",
        },
      };
    case SET_LOADING:
      return {
        ...state,
        isLoaded : payload
      };
    default:
      return {
        ...state,
      };
  }
}
