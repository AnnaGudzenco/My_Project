import types from "./types";
const initialState = {
  isOpen: false,
  cardToDelete: null,
  data: JSON.parse(localStorage.getItem("cart")),
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    case types.SET_CARD_TO_DELETE:
      return {
        ...state,
        cardToDelete: action.payload,
      };
    case types.SET_CARTS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case types.CLEAR_CART:
      console.log("Buyer info", action.payload);
      state.data.map((goods, index) => console.log("Goods", index + 1, goods));
      localStorage.removeItem("cart");
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};
export default reducer;
