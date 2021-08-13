import types from "./types";
const initialState = {
  toggle: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_SELECTED_TO_REMOVE:
      return {
        ...state,
        toggle: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
