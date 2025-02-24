import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import renderCheckBoxField from '@/shared/components/form/CheckBox';
import PasswordField from '@/shared/components/form/Password';
import {
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { AccountButton, AccountForgotPassword, LoginForm } from '@/shared/components/account/AccountElements';


const LogInForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <LoginForm onSubmit={handleSubmit}>

        
     

        <FormGroup>
          <FormGroupLabel>Username</FormGroupLabel>
          <FormGroupField>
            <FormGroupIcon>
              <AccountOutlineIcon />
            </FormGroupIcon>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name"
            />
          </FormGroupField>
        </FormGroup>
        <FormGroup>
          <FormGroupLabel>Password</FormGroupLabel>
          <FormGroupField>
            <Field
              name="password"
              component={PasswordField}
              placeholder="Password"
              className="input-without-border-radius"
              keyIcon
            />
            <AccountForgotPassword>
              <NavLink to="/">Forgot a password?</NavLink>
            </AccountForgotPassword>
          </FormGroupField>
        </FormGroup>
        <FormGroup>
          <FormGroupField>
            <Field
              name="remember_me"
              component={renderCheckBoxField}
              label="Remember me"
              type="checkbox"
            />
          </FormGroupField>
        </FormGroup>
        <AccountButton
          as={NavLink}
          variant="primary"
          to="/pages/dashboard"
        >
          Sign In
        </AccountButton>
      
      </LoginForm>
    )}
  </Form>
);

LogInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LogInForm;
