import Modal from "./Modal.js";
import Personalisation from "./Personalisation.js";
import DeleteCards from "./delCards.js";
import EditInfo from "./Editing.js";
import Filter from "./Filter.js";

const btnCreateVisit = document.getElementById("create-visit");
const btnOnComeIn = document.getElementById("btn-on-come-in");
const btnSearch = document.getElementById("search-btn");

btnCreateVisit.addEventListener("click", () => {
  btnCreateVisit.disabled = true;
  new Modal().createForm();
  document.body.addEventListener("click", (evt) => {
    if (
      evt.target.className === "row justify-content-center" ||
      evt.target.className === "btn-close btn-close-darck"
    ) {
      if (document.getElementById("form-doctor")) {
        document.getElementById("form-doctor").remove();
        btnCreateVisit.disabled = false;
      }
      new DeleteCards().showMore();
      new DeleteCards().delCard();
      new EditInfo().editing();
    }
  });
});

btnOnComeIn.addEventListener("click", () => {
  btnOnComeIn.disabled = true;
  new Personalisation().logIn();
});

btnSearch.addEventListener("click", () => {
  new Filter().filter();
});
