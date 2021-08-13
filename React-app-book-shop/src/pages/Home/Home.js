import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";

import CardsList from "../../components/CardsList/CardsList";
import { connect } from "react-redux";
import { homeOperations } from "../../store/home";

function Home({ goods, isLoading, getGoods }) {
  useEffect(() => {
    getGoods();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return <CardsList goods={goods} deleteProduct={false} />;
}
const mapStateToProps = (state) => {
  return {
    goods: state.home.goods.data,
    isLoading: state.home.goods.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getGoods: () => dispatch(homeOperations.getGoods()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
