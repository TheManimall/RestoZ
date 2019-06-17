import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  ...custom
}) => (
  <div className="InputField" style={{flexDirection: 'column', color: 'red'}}>
    <TextField
      {...input}
      {...custom}
      label={`${label}:`}
      type={type}
    />
    {touched && ((error && <p>{error}</p>) || (warning && <p>{warning}</p>))} 
  </div>
);

export default InputField;
