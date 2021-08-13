import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsList from "../../components/CardsList/CardsList";
import { selectedActions } from "../../store/selected";

const Selected = () => {
  const selectedArr = JSON.parse(localStorage.getItem("favorite"));
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.selected.toggle);

  const deleteFromSelect = (card) => {
    if (card) {
      if (selectedArr) {
        const newdArr = selectedArr.filter((el) => el.id !== card.id);
        localStorage.setItem("favorite", JSON.stringify(newdArr));
        dispatch(selectedActions.changeSelectedToremove(!toggle));

        if (newdArr.length === 0) {
          localStorage.removeItem("favorite");
          dispatch(selectedActions.changeSelectedToremove(!toggle));
        }
      }
    }
  };
  return (
    <>
      {selectedArr ? (
        <CardsList
          goods={selectedArr}
          deleteProduct={false}
          deleteFromSelect={deleteFromSelect}
        />
      ) : (
        <h2 className="empty-cart">You have't selected product </h2>
      )}
    </>
  );
};

export default Selected;
