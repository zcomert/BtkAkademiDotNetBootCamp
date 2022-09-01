const ADD_TO_CART = "ADD_TO_CART";

export function addToCart(cartItem) {
  return function (dispatch) {
    return dispatch({ type: ADD_TO_CART, payload: cartItem });
  };
}
