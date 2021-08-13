import React from "react";
import "./FormCart.scss";
import { Form, withFormik } from "formik";
import Input from "./Input";
import schema from "./Validation";
import store from "../../store";
import { cartActions } from "../../store/cart";

const FormCart = (props) => {
  return (
    <Form className="form">
      <h3>Please confirm this form</h3>
      <Input name="name" type="text" placeholder="Name" />
      <Input name="secondName" type="text" placeholder="Second Name" />
      <Input name="age" type="number" placeholder="Age" />
      <Input name="adress" type="text" placeholder="Delivery address" />
      <Input name="phone" type="tel" placeholder="Mobil phone" />
      <button className="btn" type="submit">
        Checkout
      </button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: (props) => ({
    name: "",
    secondName: "",
    age: "",
    adress: "",
    phone: "",
  }),
  handleSubmit: (values, helpers) => {
    store.dispatch(cartActions.clearCart(values));
    setTimeout(() => {
      helpers.setSubmitting(false);
      helpers.resetForm();
    }, 1000);
  },
  validationSchema: schema,
})(FormCart);
