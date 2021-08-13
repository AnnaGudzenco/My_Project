import types from "./types";
const setGoodsData = (payload) => ({
  type: types.SET_GOODS_DATA,
  payload,
});
const setGoodsLoading = (payload) => ({
  type: types.SET_GOODS_LOADING,
  payload,
});
const setModalIsOpen = (payload) => ({
  type: types.SET_MODAL_IS_OPEN,
  payload,
});
const setChosenCard = (payload) => ({
  type: types.SET_CHOSEN_CARD,
  payload,
});
const changeFavoriteInCard = (payload) => ({
  type: types.CHANGE_FAVORITE_IN_CARD,
  payload,
});

export default {
  setGoodsData,
  setGoodsLoading,
  setModalIsOpen,
  setChosenCard,
  changeFavoriteInCard,
};
