import axios from "axios";
import actions from "./actions";

const getGoods = () => (dispatch) => {
  axios("/api/goods.json").then((res) => {
    const localArr = JSON.parse(localStorage.getItem("favorite"));
    if (localArr) {
      res.data.forEach((cardEl) => {
        localArr.find((e) => cardEl.id === e.id && (cardEl.favorite = true));
      });
      dispatch(actions.setGoodsData(res.data));
    } else {
      dispatch(actions.setGoodsData(res.data));
    }
    dispatch(actions.setGoodsLoading(false));
  });
};

export default { getGoods };
