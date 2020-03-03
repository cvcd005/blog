import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Spin, Col } from 'antd';

import { signIn, createLocalStorage } from '../Api/Api';
import { actionCreatorsSignIn } from '../Store/actions';


const validSchema = Yup.object({
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]{0,}$/, "Password have only latin letters and digits")
    .required("You must enter password"),
  email: Yup.string()
    .email("Invalid email address")
    .required("You must enter email"),
});

const submitForm = (createThunk, actionSignIn) => async (values, { setSubmitting, resetForm, setFieldError }) => {
  try {
    const response = await signIn({user: values});
    if (response.status === 200) {
      resetForm();
      setSubmitting(false);
      const { user } = response.data;
      createThunk(user, actionSignIn);
      createLocalStorage(user);
    }
  } catch (error) {
    setFieldError('email', 'Check email');
    setFieldError('password', 'Check password');
  }
}

const LoginPage = (props) =>  {
  const { isLoggedIn, createThunk, actionSignIn } = props;

  if (isLoggedIn) {
    return <Redirect to="/blog" />
  }

  return (
    <Col xs={22} md={12} xl={6} className="form-wrapper">
      <h2 className="form-header">Sing in to Blog</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validSchema}
        onSubmit={submitForm(createThunk, actionSignIn)}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <label htmlFor="email"><span className="form-label">Email</span>
              <Field type="email" name="email" className="form-input" />
            </label>
            <ErrorMessage name="email" component="div" className="form-error"/>

            <label htmlFor="password"><span className="form-label">Password</span>
              <Field type="password" name="password" className="form-input" />
            </label>
            <ErrorMessage name="password" component="div" className="form-error"/>

            {props.isSubmitting ? (
                <Spin />
              ) : (
                <button type="submit" className="btn-primary">
              Sign in
            </button>
              )}
          </Form>
        )}
      </Formik>
      <div className="or">OR</div>
      <Link to="signup">
        Create new Account
      </Link>
    </Col>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps, actionCreatorsSignIn)(LoginPage);
