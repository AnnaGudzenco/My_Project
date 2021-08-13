import ModalLogin from "./ModalLogin.js";
import Request from "./Request.js";
import Card from "./Card.js";
import DeleteCards from "./delCards.js";
import EditInfo from "./Editing.js";

export default class Personalisation {
  constructor() {
    this.request = new Request();
  }
  logIn() {
    const modal = new ModalLogin().createForm();
    const introduceEmail = document.getElementById("formEmail");
    const introducePassword = document.getElementById("formPassword");
    const btnSingIn = document.getElementById("btn-login-form");
    btnSingIn.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (introduceEmail.value && introducePassword.value) {
        this.request
          .loginToThePage(
            introduceEmail.value.trim(),
            introducePassword.value.trim()
          )
          .then((token) => {
            if (token) {
              const btnOnComeIn = document.getElementById("btn-on-come-in");
              const btnCreateVisit = document.getElementById("create-visit");
              modal.remove();
              btnOnComeIn.remove();
              btnCreateVisit.classList.remove("d-none");
              this.request.getAllCardsInfo().then((data) => {
                data.forEach((obj) => {
                  if (obj.doctor === "Кардиолог") {
                    new Card().createCardCardiologist(obj);
                  } else if (obj.doctor === "Стоматолог") {
                    new Card().createCardDentist(obj);
                  } else if (obj.doctor === "Терапевт") {
                    new Card().createCardTherapist(obj);
                  }
                });
                new DeleteCards().delCard();
                new DeleteCards().showMore();
                new DeleteCards().delTextNoItem();
                new EditInfo().editing();
              });
            }
          });
      }
    });
  }
}
