import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField';
import SelectField from '../../../common/SelectField';
import { signUp } from '../../../../store/actions/authActions';
import { selectData } from '../../../helpers/selectData';
import { required, email } from '../../Main/Content/validation';
// import PropTypes from 'prop-types';

import './Registration.scss';

let Registration = ({ signUp, handleSubmit, history }) => {
  const _onSubmit = data => {
    signUp(data);
    history.push('/');
  };

  return (
    <div className="Registration">
      <div className="main-sector">
        <div className="container">
          <h1>Реєстрація</h1>
          <form onSubmit={handleSubmit(_onSubmit)}>
            <Field
              name="name"
              type="text"
              placeholder="Назва закладу"
              label="Назва закладу"
              component={InputField}
              validate={[ required ]}
            />
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
            <Field name="type" label="Тип закладу" component={SelectField}>
              <option value="" />
              {selectData.map(item => (
                <option value={item.value}>{item.label}</option>
              ))}
            </Field>
            <Field
              name="imgUrl"
              type="text"
              placeholder="Посилання на зображення"
              label="Посилання на зображення"
              component={InputField}
              validate={[ required ]}
            />
            <div className="buttons">
              <Button variant="contained">
                <Link to="/">Назад</Link>
              </Button>
              <Button type="submit" variant="contained" color="secondary">
                Підтвердити
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-sector">
        <div className="red" />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: data => dispatch(signUp(data))
});

Registration = withRouter(Registration);

Registration = connect(
  null,
  mapDispatchToProps
)(Registration);

// Registration.propTypes = {};
export default reduxForm({
  form: 'registration'
})(Registration);
