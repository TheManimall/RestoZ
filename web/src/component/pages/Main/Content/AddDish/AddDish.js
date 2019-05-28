import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InputField from '../../../../common/InputField';
import './AddDish.scss';

const AddDish = () => {
  return (
    <div className="AddDish">
      <Card>
        <Typography gutterBottom variant="h5" component="h2">
          Додати страву
        </Typography>
        <CardContent>
          <Field name="name" label="Назва страви" component={InputField} />
          <Field name="price" label="Ціна" component={InputField} />
          <Field name="weight" label="Вага" component={InputField} />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
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

export default reduxForm({ form: 'AddDish' })(AddDish);
