import React from 'react';
import { reduxForm, Field, arrayPush } from 'redux-form';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InputField from '../../../../common/InputField';
import { addDish } from '../../../../../store/actions/mainActions';
import './AddDish.scss';
import AddIngredients from '../../../../common/AddIngredients';

let AddDish = ({ arrayPush, addDish, handleSubmit }) => {
  return (
    <div className="AddDish">
      <Card>
        <Typography gutterBottom variant="h5" component="h2">
          Додати страву
        </Typography>
        <CardContent>
          <Field name="name" label="Назва страви" component={InputField} />
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
          <AddIngredients arrayPush={arrayPush} />
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
  arrayPush: value => dispatch(arrayPush('AddDish', 'ingredients', value)),
  addDish: data => dispatch(addDish(data)),
});

AddDish = connect(
  null,
  mapDispatchToProps
)(AddDish);

export default reduxForm({ form: 'AddDish' })(AddDish);
