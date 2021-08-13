import types from "./types";
const initialState = {
  goods: {
    data: null,
    isLoading: true,
  },
  modalOpen: false,
  choseCard: null,
  favorite: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_GOODS_DATA:
      return {
        ...state,
        goods: { ...state.goods, data: action.payload },
      };
    case types.SET_GOODS_LOADING:
      return {
        ...state,
        goods: { ...state.goods, isLoading: action.payload },
      };
    case types.SET_MODAL_IS_OPEN:
      return {
        ...state,
        modalOpen: action.payload,
      };
    case types.SET_CHOSEN_CARD:
      return {
        ...state,
        choseCard: action.payload,
      };
    case types.CHANGE_FAVORITE_IN_CARD:
      return {
        ...state,
        favorite: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
