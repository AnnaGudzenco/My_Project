import React from "react";
import { connect, useSelector } from "react-redux";
import CardsList from "../../components/CardsList/CardsList";
import "./cart.scss";
import { cartActions } from "../../store/cart";
import FormCart from "../../components/FormCart/FormCart";

function Cart({ isOpen, cardToDelete, dispatch }) {
  const cartArr = useSelector((state) => state.cart.data);

  const openDeleteModal = (card) => {
    dispatch(cartActions.cartIsOpen(!isOpen));
    dispatch(cartActions.setCardToDelete(card));
  };
  const deleteFromCart = () => {
    if (cardToDelete) {
      if (cartArr) {
        const newCartArr = cartArr.filter((el) => el.id !== cardToDelete.id);
        localStorage.setItem("cart", JSON.stringify(newCartArr));
        dispatch(cartActions.setCartData(newCartArr));
        openDeleteModal();

        if (newCartArr.length === 0) {
          localStorage.removeItem("cart");
          dispatch(cartActions.setCartData(null));
        }
      }
    }
  };
  return (
    <>
      {cartArr ? (
        <div>
          <div className="cart-container">
            <div className="cart-img"></div>
            <span className="cart-count">{cartArr.length}</span>
          </div>
          <FormCart />
          <CardsList
            goods={cartArr}
            deleteProduct={true}
            openDeleteModal={openDeleteModal}
            deleteFromCart={deleteFromCart}
          />
        </div>
      ) : (
        <h2 className="empty-cart">Your cart is empty</h2>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.cart.isOpen,
    cardToDelete: state.cart.cardToDelete,
  };
};
export default connect(mapStateToProps)(Cart);
