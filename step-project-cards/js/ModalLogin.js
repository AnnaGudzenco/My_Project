import Input from "./Input.js";
import Modal from "./Modal.js";

export default class ModalLogin extends Modal {
    createForm() {
        const form = this.createWrapper();
        form.classList.add("px-4", "py-3", "col-4", "form-exit");
        const inputEmail = new Input(
            ["form-control"],
            "formEmail",
            "email",
            "email@example.com",
            ""
        ).createInput();
        form.append(inputEmail);

        const inputLogin = new Input(
            ["form-control"],
            "formPassword",
            "password",
            "Password",
            ""
        ).createInput();
        form.append(inputLogin);

        const inputBtn = new Input(
            ["btn", "btn-secondary"],
            "btn-login-form",
            "submit",
            "",
            "Sign in"
        ).createInput();
        form.append(inputBtn);
        return form;
    }
}
