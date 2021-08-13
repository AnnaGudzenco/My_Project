import Request from "./Request.js";

export default class DeleteCards {
  constructor() {
    this.request = new Request();
  }

  async delCard() {
    const allBtnCloseCards = await document.querySelectorAll(".btn-close");
    allBtnCloseCards.forEach((someBtn) => {
      if (Number(someBtn.id)) {
        someBtn.addEventListener("click", () => {
          this.request.deleteCard(someBtn.id);
          someBtn.parentElement.parentElement.parentElement.remove();
          setTimeout(function () {
            new DeleteCards().delTextNoItem();
          }, 100);
        });
      }
    });
  }

  async showMore() {
    const showMoreBtns = await document.querySelectorAll(
      ".card-body .btn-secondary"
    );
    showMoreBtns.forEach((btn) => {
      const items =
        btn.parentElement.previousElementSibling.querySelectorAll("li");
      btn.addEventListener("click", () => {
        items.forEach((item) => {
          if (item.getAttribute("style") === "display: none") {
            item.setAttribute("style", "display: block");
          } else if (item.getAttribute("style") === "display: block") {
            item.setAttribute("style", "display: none");
          }
        });
      });
    });
    return showMoreBtns;
  }

  async delTextNoItem() {
    const lengthCards = await this.request.allCardsLength();
    const textNoItems = document.getElementById("text-no-items");
    if (lengthCards > 0) {
      textNoItems.style = "display: none";
    } else {
      textNoItems.style = "display: block";
    }
  }
}
