import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required")
    .min(2, "Please enter full name")
    .max(30, "Too Long!"),
  secondName: Yup.string()
    .min(3, "Please enter full second name")
    .required("This field is required")
    .max(30, "Too Long!"),
  age: Yup.number()
    .required()
    .positive()
    .integer()
    .min(16, "Sorry, but you`re too young")
    .max(100, "Please enter your true age"),
  adress: Yup.string()
    .min(10, "Please confirm full address")
    .required("This field is required"),
  phone: Yup.number()
    .min(9, "This is not a valid phone")
    .required("This field is required")
    .positive("A phone number can't start with a minus"),
});

export default schema;
