import { SET_THEME } from "../actions/appActions";
import { theme } from "../initials/appItems";

const initialValue = {
  theme,
};

export function appReducer(state = initialValue, { type, payload }) {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
