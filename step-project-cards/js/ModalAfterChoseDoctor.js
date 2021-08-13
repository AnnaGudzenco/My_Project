import Input from "./Input.js";
import { Label } from "./Input.js";

export default class FormToAddFields {
  constructor(inputBeforeCreate) {
    this.inputBeforeCreate = inputBeforeCreate;
  }
  createCardiologistFilds() {
    const normalPressure = new Input(
      ["form-control"],
      "inputNormalPressure",
      "text",
      "Обычное давления",
      true,
      ""
    ).createInput();
    normalPressure.setAttribute("data-id", "cardiolog");
    this.inputBeforeCreate.before(normalPressure);

    const massIndex = new Input(
      ["form-control"],
      "inputMassIndex",
      "text",
      "Индекс массы тела",
      true,
      ""
    ).createInput();
    massIndex.setAttribute("data-id", "cardiolog");
    this.inputBeforeCreate.before(massIndex);

    const diseases = new Input(
      ["form-control"],
      "inputdiseases",
      "text",
      "Перенесенные заболевания сердечно-сосудистой системы",
      true,
      ""
    ).createInput();
    diseases.setAttribute("data-id", "cardiolog");
    this.inputBeforeCreate.before(diseases);

    const age = new Input(
      ["form-control"],
      "inputage",
      "text",
      "Bозраст",
      true,
      ""
    ).createInput();
    age.setAttribute("data-id", "cardiolog");
    this.inputBeforeCreate.before(age);
    this.removeFields("dentist");
    this.removeFields("therapist");
    if (document.querySelector(".form-label")) {
      document.querySelector(".form-label").remove();
    }
    const wrapForCardiolog = [normalPressure, massIndex, diseases, age];
    return wrapForCardiolog;
  }

  createDentistFields() {
    const label = new Label(
      ["form-label"],
      "inputlastVisitDate",
      "Last visit date"
    ).createLabel();
    const lastVisitDate = new Input(
      ["form-control"],
      "inputlastVisitDate:",
      "date",
      "",
      true,
      ""
    ).createInput();
    lastVisitDate.setAttribute("data-id", "dentist");

    this.inputBeforeCreate.before(lastVisitDate);
    lastVisitDate.before(label);
    this.removeFields("cardiolog");
    this.removeFields("therapist");
    return lastVisitDate;
  }

  createTherapist() {
    const age = new Input(
      ["form-control"],
      "inputage",
      "text",
      "Bозраст",
      true,
      ""
    ).createInput();
    age.setAttribute("data-id", "therapist");
    this.inputBeforeCreate.before(age);
    this.removeFields("cardiolog");
    this.removeFields("dentist");
    if (document.querySelector(".form-label")) {
      document.querySelector(".form-label").remove();
    }
    return age;
  }
  removeFields(dataSet) {
    const equates = document.querySelectorAll(`[data-id=${dataSet}]`);
    const equate = document.querySelector(`[data-id=${dataSet}]`);
    if (equate !== null || equate !== null) {
      if (dataSet === "cardiolog") {
        equates.forEach((el) => {
          el.remove();
        });
      } else {
        equate.remove();
      }
    }
  }
}
