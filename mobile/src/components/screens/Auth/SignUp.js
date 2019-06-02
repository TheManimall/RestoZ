import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import TextField from '../../common/TextField';

const SignUp = () => (
  <Container>
    <Header>
      Реєстрація
    </Header>
    <Content>
      <Form>
        <Field 
          name={'nickname'}
    
          component={TextField}
        />
        <Field 
          name={'firstName'}
         
          component={TextField}
        />
        <Field 
          name={'lastName'}
          
          component={TextField}
        /> 
        <Field 
          name={'email'}
          
          component={TextField}
        /> 
        <Field 
          name={'password'}
          
          component={TextField}
        /> 
      </Form>  
    </Content>  
  </Container>
);

export default reduxForm({form: 'signUp'})(SignUp);