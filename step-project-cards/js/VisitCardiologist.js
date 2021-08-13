import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit {
  constructor(
    doctor,
    userName,
    aimOfVisit,
    visitDescription,
    priority,
    ID,
    wrapForCardiolog
  ) {
    super(doctor, userName, aimOfVisit, visitDescription, priority, ID);
    this.wrapForCardiolog = wrapForCardiolog; //array
  }
  formCardiologist() {
    const formDoctorBtn = document.getElementById("form-doctor-btn");
    const btnCreateVisit = document.getElementById("create-visit");
    const formDoctor = document.getElementById("form-doctor");
    formDoctorBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      [this.firstName, this.lastName] = this.userName.value.split(" ");
      const objCardiologist = {
        doctor: this.doctor.options[this.doctor.selectedIndex].text,
        title: this.aimOfVisit.value,
        description: this.visitDescription.value,
        priority: this.priority.options[this.priority.selectedIndex].text,
        name: this.firstName + " " + this.lastName,
        normalPressure: this.wrapForCardiolog[0].value,
        massIndex: this.wrapForCardiolog[1].value,
        diseases: this.wrapForCardiolog[2].value,
        age: this.wrapForCardiolog[3].value,
      };
      if (
        this.aimOfVisit.value &&
        this.userName.value &&
        this.priority.options[this.priority.selectedIndex].text &&
        this.doctor.options[this.doctor.selectedIndex].text &&
        this.wrapForCardiolog[0].value &&
        this.wrapForCardiolog[1].value &&
        this.wrapForCardiolog[2].value &&
        this.wrapForCardiolog[3].value
      ) {
        if (formDoctorBtn.className === "btn btn-dark") {
          const cardData = this.request.changeCard(this.ID, objCardiologist);
          this.removeCard();
          cardData.then((data) => this.card.createCardCardiologist(data));
        } else {
          const cardData = this.request.createCard(objCardiologist);
          cardData.then((data) => this.card.createCardCardiologist(data));
        }
        formDoctor.parentElement.remove();
        btnCreateVisit.disabled = false;
      }
    });
  }
}
