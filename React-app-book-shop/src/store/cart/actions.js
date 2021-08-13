import types from "./types";

const cartIsOpen = (payload) => ({
  type: types.CART_IS_OPEN,
  payload,
});
const setCardToDelete = (payload) => ({
  type: types.SET_CARD_TO_DELETE,
  payload,
});
const clearCart = (payload) => ({
  type: types.CLEAR_CART,
  payload,
});
const setCartData = (payload) => ({
  type: types.SET_CARTS_DATA,
  payload,
});
export default {
  cartIsOpen,
  setCardToDelete,
  clearCart,
  setCartData,
};
