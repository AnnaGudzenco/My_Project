import React from "react";
import PropTypes from "prop-types";
import "./card.scss";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Icon from "../Icon/Icon";
import { useSelector } from "react-redux";
const Card = ({
  card,
  toggleModal,

  changeFavorite,
  addToCart,
  deleteProduct,
  openDeleteModal,

  deleteFromCart,
}) => {
  const modalOpen = useSelector((state) => state.home.modalOpen);
  const isOpen = useSelector((state) => state.cart.isOpen);

  return (
    <li className="card">
      {deleteProduct && (
        <div className="card__btn-wrap">
          <button
            onClick={() => openDeleteModal(card)}
            className="card__btn-close"
          ></button>
        </div>
      )}
      {isOpen && (
        <Modal
          card={card}
          deleteFromCart={deleteFromCart}
          openDeleteModal={openDeleteModal}
          headerText={"Do you want to delete this file?"}
          modalText={
            "Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?"
          }
          btnText={"Delele this product"}
        />
      )}
      <div className="card__img-wrap">
        <img
          src={card.url}
          alt="GoodsPicture"
          className="card__img"
          height="250"
        />
      </div>

      <div className="card__wrap">
        <h5 className="card__title">{card.title}</h5>
        {!deleteProduct && <Button toggleModal={toggleModal} card={card} />}

        {modalOpen && (
          <Modal
            toggleModal={toggleModal}
            addToCart={addToCart}
            headerText={"Добавить этот товар в корзину?"}
            modalText={
              " При добавлении товара в корзину, Вы сможете изменить его количесто, и указать место доставки."
            }
            btnText={"Добавить товар"}
          />
        )}

        <Icon
          type="star"
          filled={card.favorite}
          changeFavorite={changeFavorite}
        />
        <div className="card__info-wrap">
          <p className="card__info">Цена:</p>
          <span className="card__info-price">{card.price}</span>
        </div>
        <div className="card__info-wrap">
          <p className="card__info-arcicle">артикyл:</p>
          <span className="card__info-arcicle">{card.article}</span>
        </div>
      </div>
    </li>
  );
};

Card.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool,
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
};
Card.defaultProps = {
  modalOpen: false,
  color: "white",
};
export default Card;
