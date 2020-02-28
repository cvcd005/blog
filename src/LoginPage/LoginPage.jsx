import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { signIn } from '../Api/Api';
import { actionCreatorsSignIn } from '../Store/actions';


const validSchema = Yup.object({
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]{0,}$/, "Password have only latin letters and digits")
    .required("You must enter password"),
  email: Yup.string()
    .email("Invalid email address")
    .required("You must enter email"),
});

const submitForm = (createThunk, LogIn) => async (values, { setSubmitting, resetForm, setFieldError }) => {
  try {
    const response = await signIn({user: values});
    if (response.status === 200) {
      resetForm();
      setSubmitting(false);
      const {email, token, username } = response.data.user;
      createThunk({email, token, username}, LogIn);
    }
  } catch (error) {
    setFieldError('email', 'Check email');
    setFieldError('password', 'Check password');
  }
}

const LoginPage = (props) =>  {
  const { isLoggedIn, createThunk, LogIn } = props;

  if (isLoggedIn) {
    return <Redirect to="/blog" />
  }

  return (
    <div>This is Login Page
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validSchema}
        onSubmit={submitForm(createThunk, LogIn)}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <label htmlFor="email">Email
              <Field type="email" name="email" />
            </label>
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password">Password
              <Field type="password" name="password" />
            </label>
            <ErrorMessage name="password" component="div" />

            <button type="submit" >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Link to="signup">Link to registration</Link>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps, actionCreatorsSignIn)(LoginPage);
