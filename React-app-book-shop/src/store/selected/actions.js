import types from "./types";
const changeSelectedToremove = (payload) => ({
  type: types.CHANGE_SELECTED_TO_REMOVE,
  payload,
});

export default {
  changeSelectedToremove,
};
