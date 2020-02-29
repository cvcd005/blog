import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Spin, Col } from 'antd';

import { signUp, createLocalStorage } from '../Api/Api';
import { actionCreatorsSignIn  } from '../Store/actions';

const validSchema = Yup.object({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9]{0,}$/, "Name have only latin letters and digits")
    .required("You must enter Name"),
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]{0,}$/, "Password have only latin letters and digits")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .required("You must enter password"),
  email: Yup.string()
    .email("Invalid email address")
    .required("You must enter email"),
});

const submitForm = (createThunk, actionSignIn) => async (values, { setSubmitting, resetForm, setFieldError }) => {
  try {
    const response = await signUp({user: values});
    if (response.status === 200) {
      resetForm();
      setSubmitting(false);
      const { user } = response.data;
      createThunk(user, actionSignIn);
      createLocalStorage(user);
    }
  } catch (error) {
      const { email, password, username } = error.response.data.errors;
      setFieldError('username', username);
      setFieldError('email', email);
      setFieldError('password', password);
  }
}

const RegisterPage = (props) => {
  const { isLoggedIn, createThunk, actionSignIn } = props;

  if (isLoggedIn) {
    return <Redirect to="/blog" />
  }

  return (
    <Col xs={22} md={12} xl={6} className="formWrapper">
      <h2 className="formHeader">Create new accuant</h2>
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validationSchema={validSchema}
        onSubmit={submitForm(createThunk, actionSignIn)}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <label htmlFor="username"><span className="labelForm">Name</span>
              <Field type="text" name="username" className="inputForm"/>
            </label>
            <ErrorMessage name="username" component="div" className="errorForm" />

            <label htmlFor="email"><span className="labelForm">Email</span>
              <Field type="email" name="email" className="inputForm"/>
            </label>
            <ErrorMessage name="email" component="div" className="errorForm" />

            <label htmlFor="password"><span className="labelForm">Password</span>
              <Field type="password" name="password" className="inputForm" />
            </label>
            <ErrorMessage name="password" component="div" className="errorForm" />

            {props.isSubmitting ? (
              <Spin />
              ) : (
                <button type="submit" className="btn-primary">
              Sign Up
            </button>
            )}
          </Form>
        )}
      </Formik>
      <div className="or">OR</div>
      <Link to="login">Sign in</Link>
    </Col>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps,  actionCreatorsSignIn)(RegisterPage);
