import Input from "./Input.js";
import { Select } from "./Input.js";
import { Textarea } from "./Input.js";
import FormToAddFields from "./ModalAfterChoseDoctor.js";
import VisitDentist from "./VisitDentist.js";
import VisitCardiologist from "./VisitCardiologist.js";
import VisitTherapist from "./VisitTherapist.js";
import DeleteCards from "./delCards.js";
import EditInfo from "./Editing.js";

export default class Modal {
  createWrapper() {
    const main = document.getElementById("main"),
      container = document.createElement("div"),
      row = document.createElement("div"),
      form = document.createElement("form");
    form.setAttribute("action", "/");
    container.classList.add("form-container");
    row.classList.add("row", "justify-content-center");
    main.prepend(container);
    container.append(row);
    row.append(form);
    return form;
  }
  removeForm() {
    const container = document.querySelector(".form-container");
    if (container) {
      container.remove();
    }
  }
  createForm() {
    this.removeForm();
    const form = this.createWrapper();
    form.classList.add("col-6", "form-doctor");
    form.setAttribute("id", "form-doctor");
    const closeBtn = new Input(
      ["btn-close", "btn-close-darck"],
      "btn-close",
      "button",
      "",
      ""
    ).createInput();
    const wrapper = document.createElement("p");
    wrapper.classList.add("mb-2", "close-btn");
    wrapper.append(closeBtn);
    form.append(wrapper);

    const selectDoctor = new Select(
      ["form-select"],
      "doctor-select",
      "Выбирете врача:",
      ["cardiologist", "dentist", "therapist"],
      ["Кардиолог", "Стоматолог", "Терапевт"]
    ).createSelect();
    form.append(selectDoctor);

    const aimOfVisit = new Input(
      ["form-control"],
      "inputAim",
      "text",
      "Цель визита:",
      ""
    ).createInput();
    form.append(aimOfVisit);

    const inputTextArea = new Textarea(
      ["form-control"],
      "inputTextarea",
      "Краткое описания визита:"
    ).createTextArea();
    form.append(inputTextArea);

    const selectPriority = new Select(
      ["form-select"],
      "select-priority",
      "Срочность:",
      [1, 2, 3],
      ["Обычная", "Приоритетная", "Неотложная"]
    ).createSelect();
    form.append(selectPriority);

    const inputUserName = new Input(
      ["form-control"],
      "inputUserName",
      "text",
      "ФИО:",
      ""
    ).createInput();
    form.append(inputUserName);

    const inputSubmit = new Input(
      ["btn", "btn-secondary"],
      "form-doctor-btn",
      "submit",
      "",
      "Create Visit"
    ).createInput();
    inputSubmit.addEventListener("click", () => {
      setTimeout(function () {
        new DeleteCards().delCard();
      }, 1000);
      setTimeout(function () {
        new DeleteCards().showMore();
        new EditInfo().editing();
      }, 500);
      setTimeout(function () {
        new DeleteCards().delTextNoItem();
      }, 200);
    });
    form.append(inputSubmit);

    selectDoctor.addEventListener("change", () => {
      const val = selectDoctor.options[selectDoctor.selectedIndex].value;

      if (val === "cardiologist") {
        const arrForCardiolog = new FormToAddFields(
          inputSubmit
        ).createCardiologistFilds();
        new VisitCardiologist(
          selectDoctor,
          inputUserName,
          aimOfVisit,
          inputTextArea,
          selectPriority,
          "",
          arrForCardiolog //array
        ).formCardiologist();
      } else if (val === "dentist") {
        const dentistField = new FormToAddFields(
          inputSubmit
        ).createDentistFields();
        new VisitDentist(
          selectDoctor,
          inputUserName,
          aimOfVisit,
          inputTextArea,
          selectPriority,
          "",
          dentistField
        ).formDentist();
      } else if (val === "therapist") {
        const therapistField = new FormToAddFields(
          inputSubmit
        ).createTherapist();
        new VisitTherapist(
          selectDoctor,
          inputUserName,
          aimOfVisit,
          inputTextArea,
          selectPriority,
          "",
          therapistField
        ).formTherapist();
      } else if (val === "Выбирете врача:") {
        if (document.querySelector(".form-label")) {
          document.querySelector(".form-label").remove();
        }
        new FormToAddFields().removeFields("therapist");
        new FormToAddFields().removeFields("cardiolog");
        new FormToAddFields().removeFields("dentist");
      }
    });
    return form;
  }
}
