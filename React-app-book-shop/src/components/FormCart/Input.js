import { useField } from "formik";
import React from "react";

const Input = (props) => {
  const { name, ...rest } = props;
  const formikProps = useField(name);
  const [field, fieldState] = formikProps;

  return (
    <div>
      <div className="form__input-wrap">
        <input className="form__input" {...field} {...rest} />
        {fieldState.error && fieldState.touched && (
          <p className="form__error">{fieldState.error}</p>
        )}
      </div>
    </div>
  );
};

export default Input;
