export default class Input {
  constructor(className, id, type, placeholder, value) {
    this.className = className; //array
    this.id = id;
    this.type = type;
    this.placeholder = placeholder;
    this.value = value;
  }
  createInput() {
    const input = document.createElement("input");
    input.setAttribute("id", this.id);
    input.classList.add(...this.className);
    input.setAttribute("type", this.type);
    input.setAttribute("placeholder", this.placeholder);
    if (this.type === "submit") {
      input.setAttribute("value", this.value);
      return input;
    } else {
      input.setAttribute("required", "");
    }
    return input;
  }
  createWrapper() {
    const wrapper = document.createElement("p");
    wrapper.classList.add("mb-2");
    return wrapper;
  }
}

export class Select extends Input {
  constructor(className, id, selectedText, values, options) {
    super(className, id);
    this.selectedText = selectedText;
    this.values = values; // array
    this.options = options; //array
  }
  createSelect() {
    const select = document.createElement("select"),
      option = document.createElement("option"),
      option1 = document.createElement("option"),
      option2 = document.createElement("option"),
      option3 = document.createElement("option");
    select.classList.add(...this.className);
    select.setAttribute("id", this.id);
    option.setAttribute("selected", "");
    option.textContent = this.selectedText;
    option1.setAttribute("value", this.values[0]);
    option1.textContent = this.options[0];
    option2.setAttribute("value", this.values[1]);
    option2.textContent = this.options[1];
    option3.setAttribute("value", this.values[2]);
    option3.textContent = this.options[2];
    select.append(option);
    select.append(option1);
    select.append(option2);
    select.append(option3);
    return select;
  }
}
export class Textarea extends Input {
  constructor(className, id, placeholder) {
    super(className, id);
    this.placeholder = placeholder;
  }
  createTextArea() {
    const textarea = document.createElement("textarea");
    textarea.classList.add(...this.className);
    textarea.id = this.id;
    textarea.setAttribute("placeholder", this.placeholder);
    return textarea;
  }
}
export class Label extends Input {
  constructor(className, id, labelValue) {
    super(className, id);
    this.labelValue = labelValue;
  }
  createLabel() {
    const label = document.createElement("label");
    label.classList.add(...this.className);
    label.setAttribute("for", this.id);
    label.textContent = this.labelValue;

    return label;
  }
}
