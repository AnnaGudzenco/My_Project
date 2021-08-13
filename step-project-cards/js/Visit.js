import Request from "./Request.js";
import Card from "./Card.js";

export default class Visit {
  constructor(doctor, userName, aimOfVisit, visitDescription, priority, ID) {
    this.doctor = doctor;
    this.userName = userName;
    this.aimOfVisit = aimOfVisit;
    this.visitDescription = visitDescription;
    this.priority = priority;
    this.ID = ID;
    this.request = new Request();
    this.card = new Card();
  }
  removeCard() {
    const btnCardClose = document.querySelectorAll(".btn-close-darck");
    btnCardClose.forEach((btn) => {
      if (this.ID === Number(btn.id)) {
        btn.parentElement.parentElement.parentElement.remove();
      }
    });
  }
}
