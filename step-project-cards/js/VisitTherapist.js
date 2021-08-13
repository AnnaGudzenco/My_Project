import Visit from "./Visit.js";

export default class VisitTherapist extends Visit {
  constructor(
    doctor,
    userName,
    aimOfVisit,
    visitDescription,
    priority,
    ID,
    age
  ) {
    super(doctor, userName, aimOfVisit, visitDescription, priority, ID);
    this.age = age;
  }
  formTherapist() {
    const formDoctorBtn = document.getElementById("form-doctor-btn");
    const btnCreateVisit = document.getElementById("create-visit");
    const formDoctor = document.getElementById("form-doctor");

    formDoctorBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      [this.firstName, this.lastName] = this.userName.value.split(" ");
      const objTherapist = {
        doctor: this.doctor.options[this.doctor.selectedIndex].text,
        title: this.aimOfVisit.value,
        description: this.visitDescription.value,
        priority: this.priority.options[this.priority.selectedIndex].text,
        name: this.firstName + " " + this.lastName,
        age: this.age.value,
      };
      if (
        this.aimOfVisit.value &&
        this.userName.value &&
        this.priority.options[this.priority.selectedIndex].text &&
        this.doctor.options[this.doctor.selectedIndex].text &&
        this.age.value
      ) {
        if (formDoctorBtn.className === "btn btn-dark") {
          const cardData = this.request.changeCard(this.ID, objTherapist);
          this.removeCard();
          cardData.then((data) => this.card.createCardTherapist(data));
        } else {
          const cardData = this.request.createCard(objTherapist);
          cardData.then((data) => this.card.createCardTherapist(data));
        }
        formDoctor.parentElement.remove();
        btnCreateVisit.disabled = false;
      }
    });
  }
}
