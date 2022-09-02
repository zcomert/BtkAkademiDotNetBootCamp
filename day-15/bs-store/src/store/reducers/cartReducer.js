import { ADD_TO_CART } from "../actions/cartActions";
import {cart} from "../initials/cartItems";

// cart = [{book}, {book}]

const init = {
    cart
}

export default function cartReducer(state=init, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart : [...state.cart, payload]
      };

    default:
      return {
        ...state,
      };
  }
}
