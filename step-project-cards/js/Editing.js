import Modal from "./Modal.js";
import Request from "./Request.js";
import VisitCardiologist from "./VisitCardiologist.js";
import VisitTherapist from "./VisitTherapist.js";
import VisitDentist from "./VisitDentist.js";
import FormToAddFields from "./ModalAfterChoseDoctor.js";

export default class EditInfo {
  async editing() {
    const btnEditCards = document.querySelectorAll(".card-body .btn-dark");
    btnEditCards.forEach((btnEdit) => {
      btnEdit.addEventListener("click", () => {
        const ID = Number(
          btnEdit.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute(
            "id"
          )
        );

        const cardData = new Request().getCard(ID);
        cardData.then((data) => {
          const modal = new Modal().createForm(); // form
          document.body.addEventListener("click", (evt) => {
            if (
              evt.target.className === "row justify-content-center" ||
              evt.target.className === "btn-close btn-close-darck"
            ) {
              if (document.getElementById("form-doctor")) {
                document.getElementById("form-doctor").remove();
              }
            }
          });
          const selectDoctor = modal.children[1];
          const selectOptions = modal.children[4];

          selectDoctor.options[selectDoctor.selectedIndex].text = data.doctor;
          modal.children[2].value = data.title;
          modal.children[3].value = data.description;
          selectOptions.options[selectOptions.selectedIndex].text =
            data.priority;
          modal.children[5].value = data.name;

          const btnSave = document.getElementById("form-doctor-btn");
          btnSave.value = "Save Change";
          btnSave.className = "btn btn-dark"; //change Btn
          const btnSubmitForm = document.getElementById("form-doctor-btn");
          if (data.doctor === "Кардиолог") {
            const arrForCardiolog = new FormToAddFields(
              btnSubmitForm
            ).createCardiologistFilds();
            arrForCardiolog[0].value = data.normalPressure;
            arrForCardiolog[1].value = data.massIndex;
            arrForCardiolog[2].value = data.diseases;
            arrForCardiolog[3].value = data.age;
            new VisitCardiologist(
              modal.children[1],
              modal.children[5],
              modal.children[2],
              modal.children[3],
              modal.children[4],
              ID,
              arrForCardiolog //array
            ).formCardiologist();
          } else if (data.doctor === "Стоматолог") {
            const dentistField = new FormToAddFields(
              btnSubmitForm
            ).createDentistFields();
            dentistField.value = data.lastVisit;
            new VisitDentist(
              modal.children[1],
              modal.children[5],
              modal.children[2],
              modal.children[3],
              modal.children[4],
              ID,
              dentistField
            ).formDentist();
          } else if (data.doctor === "Терапевт") {
            const therapistField = new FormToAddFields(
              btnSubmitForm
            ).createTherapist();
            therapistField.value = data.age;
            new VisitTherapist(
              modal.children[1],
              modal.children[5],
              modal.children[2],
              modal.children[3],
              modal.children[4],
              ID,
              therapistField
            ).formTherapist();
          } else {
            new FormToAddFields().removeFields("therapist");
            new FormToAddFields().removeFields("cardiolog");
            new FormToAddFields().removeFields("dentist");
          }
        });
      });
    });
  }
}
