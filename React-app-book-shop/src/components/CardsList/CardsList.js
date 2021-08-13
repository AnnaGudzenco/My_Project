import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./cardList.scss";
import { connect } from "react-redux";
import { homeActions } from "../../store/home";
import { cartActions } from "../../store/cart";

const CardsList = ({
  goods,
  deleteProduct,

  dispatch,
  modalOpen,
  choseCard,
  favorite,
  cart,

  openDeleteModal,
  deleteFromCart,
  deleteFromSelect,
}) => {
  const toggleModal = (card) => {
    dispatch(homeActions.setModalIsOpen(!modalOpen));
    dispatch(homeActions.setChosenCard(card));
  };

  const changeFavorite = (card) => {
    if (card) {
      let locFavorite = JSON.parse(localStorage.getItem("favorite"));
      if (locFavorite) {
        const chosenCard = locFavorite.find((obj) => obj.id === card.id);
        const index = locFavorite.indexOf(chosenCard);
        if (index === -1) {
          card.favorite = true;
          dispatch(homeActions.changeFavoriteInCard(!favorite));
          localStorage.setItem(
            "favorite",
            JSON.stringify([...locFavorite, card])
          );
        } else {
          card.favorite = false;
          locFavorite.splice(index, 1);
          dispatch(homeActions.changeFavoriteInCard(!favorite));
          localStorage.setItem("favorite", JSON.stringify(locFavorite));
          if (deleteFromSelect) {
            deleteFromSelect(chosenCard);
          }
        }
        if (locFavorite.length === 0) {
          localStorage.removeItem("favorite");
        }
      } else {
        card.favorite = true;
        dispatch(homeActions.changeFavoriteInCard(!favorite));
        localStorage.setItem("favorite", JSON.stringify([card]));
      }
    }
  };

  const addToCart = () => {
    if (cart) {
      const product = cart.find((item) => item.id === choseCard.id);
      const index = cart.indexOf(product);

      if (index === -1) {
        localStorage.setItem("cart", JSON.stringify([...cart, choseCard]));
        dispatch(cartActions.setCartData([...cart, choseCard]));
        toggleModal();
      } else if (index !== -1) {
        toggleModal();
      }
      if (cart.length === 0) {
        localStorage.removeItem("cart");
        dispatch(cartActions.setCartData(null));
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([choseCard]));
      dispatch(cartActions.setCartData([choseCard]));
    }
    toggleModal();
  };

  const goodsList = goods.map((gds) => (
    <Card
      key={gds.id}
      card={gds}
      toggleModal={toggleModal}
      changeFavorite={() => changeFavorite(gds)}
      addToCart={addToCart}
      deleteProduct={deleteProduct}
      openDeleteModal={openDeleteModal}
      deleteFromCart={deleteFromCart}
    />
  ));
  return (
    <div className="main-wrapper">
      <div className="container">
        <ol className="cards">{goodsList}</ol>
      </div>
    </div>
  );
};

CardsList.propTypes = {
  goods: PropTypes.array.isRequired,
  changeFavorite: PropTypes.func,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  modalOpen: PropTypes.bool,
};
CardsList.defaultProps = {
  modalOpen: false,
};
const mapStateToProps = (state) => {
  return {
    modalOpen: state.home.modalOpen,
    choseCard: state.home.choseCard,
    favorite: state.home.favorite,
    cart: state.cart.data,
  };
};
export default connect(mapStateToProps)(CardsList);
