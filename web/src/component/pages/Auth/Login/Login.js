import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import InputField from "../../../common/InputField";
import { signIn } from "../../../../store/actions/authActions";
import { required, email } from '../../Main/Content/validation';
// import PropTypes from 'prop-types';

import "./Login.scss";

let Login = ({ handleSubmit, signIn }) => {
  return (
    <div className="Login">
      <div className="bg-sector">
        <div className="blue" />
      </div>
      <div className="main-sector">
        <div className="container">
          <h1>Вхід</h1>
          <form onSubmit={handleSubmit(signIn)}>
            <Field
              name="email"
              type="email"
              placeholder="Електронна адреса"
              label="Електронна адреса"
              component={InputField}
              validate={[ required, email ]}
            />
            <Field
              name="password"
              type="password"
              placeholder="Ваш пароль"
              label="Ваш пароль"
              component={InputField}
              validate={[ required ]}
            />
            <div className="buttons">
              <Button variant="contained">
                <Link to="/sign-up/">Реєстрація</Link>
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Вхід
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Registration.propTypes = {};
const mapDispatchToProps = dispatch => ({
  signIn: data => dispatch(signIn(data))
});

Login = connect(
  null,
  mapDispatchToProps
)(Login);

export default reduxForm({
  form: "login"
})(Login);
