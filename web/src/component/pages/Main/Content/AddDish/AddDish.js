import React, { useEffect } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InputField from '../../../../common/InputField';
import SelectField from '../../../../common/SelectField';
import { addDish } from '../../../../../store/actions/mainActions';
import './AddDish.scss';
import AddIngredients from '../../../../common/AddIngredients';
import { dishTypeData } from './dishTypeData';

let AddDish = ({ change, addDish, handleSubmit, addId, restId }) => {
  addId(restId);

  return (
    <div className="AddDish">
      <Card>
        <Typography gutterBottom variant="h5" component="h2">
          Додати страву
        </Typography>
        <CardContent>
          <Field name="name" label="Назва страви" component={InputField} />
          <Field name="type" label="Тип страви" component={SelectField}>
            <option value="" />
            {dishTypeData.map(item => (
              <option value={item.value}>{item.label}</option>
            ))}
          </Field>
          <Field
            parse={value => Number(value)}
            name="price"
            type="number"
            label="Ціна"
            component={InputField}
          />
          <Field
            parse={value => Number(value)}
            name="weight"
            type="number"
            label="Вага"
            component={InputField}
          />
          <Field name="imgUrl" label="Зображення" component={InputField} />
          <AddIngredients change={change} />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(addDish)}
          >
            Додати страву
          </Button>
          <Button variant="contained" color="secondary">
            Очистити
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addId: value => dispatch(change('AddDish', 'restaurantId', value)),
  change: value => dispatch(change('AddDish', 'ingredients', value)),
  addDish: data => dispatch(addDish(data))
});

AddDish = connect(
  state => ({
    restId: state.auth.id
  }),
  mapDispatchToProps
)(AddDish);

export default reduxForm({ form: 'AddDish' })(AddDish);
