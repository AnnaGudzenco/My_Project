import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
  constructor(
    doctor,
    userName,
    aimOfVisit,
    visitDescription,
    priority,
    ID,
    lastVisitDate
  ) {
    super(doctor, userName, aimOfVisit, visitDescription, priority, ID);
    this.lastVisitDate = lastVisitDate;
  }
  formDentist() {
    const formDoctorBtn = document.getElementById("form-doctor-btn");
    const btnCreateVisit = document.getElementById("create-visit");
    const formDoctor = document.getElementById("form-doctor");
    formDoctorBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      [this.firstName, this.lastName] = this.userName.value.split(" ");
      const objDentist = {
        doctor: this.doctor.options[this.doctor.selectedIndex].text,
        title: this.aimOfVisit.value,
        description: this.visitDescription.value,
        priority: this.priority.options[this.priority.selectedIndex].text,
        name: this.firstName + " " + this.lastName,
        lastVisit: this.lastVisitDate.value,
      };
      if (
        this.aimOfVisit.value &&
        this.userName.value &&
        this.priority.options[this.priority.selectedIndex].text &&
        this.doctor.options[this.doctor.selectedIndex].text &&
        this.lastVisitDate.value
      ) {
        if (formDoctorBtn.className === "btn btn-dark") {
          const cardData = this.request.changeCard(this.ID, objDentist);
          this.removeCard();
          cardData.then((data) => this.card.createCardDentist(data));
        } else {
          const cardData = this.request.createCard(objDentist);
          cardData.then((data) => this.card.createCardDentist(data));
        }
        formDoctor.parentElement.remove();
        btnCreateVisit.disabled = false;
      }
    });
  }
}
