import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Spin, Col } from 'antd';

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

const RegisterPage = (props) => {
  const { isLoggedIn, thunkSignUp } = props;

  const submitForm = async (values, { setSubmitting, setFieldError }) => {
    try {
      await thunkSignUp(values);
    }
    catch (error) {
      const { email, password, username } = error;
      setFieldError('username', username);
      setFieldError('email', email);
      setFieldError('password', password);
    }
    finally {
      setSubmitting(false);
    }
  }

  if (isLoggedIn) {
    return <Redirect to="/blog" />
  }

  return (
    <Col xs={22} md={12} xl={6} className="form-wrapper">
      <h2 className="form-header">Create new accuant</h2>
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validationSchema={validSchema}
        onSubmit={submitForm}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <label htmlFor="username"><span className="form-label">Name</span>
              <Field type="text" name="username" className="form-input"/>
            </label>
            <ErrorMessage name="username" component="div" className="form-error" />

            <label htmlFor="email"><span className="form-label">Email</span>
              <Field type="email" name="email" className="form-input"/>
            </label>
            <ErrorMessage name="email" component="div" className="form-error" />

            <label htmlFor="password"><span className="form-label">Password</span>
              <Field type="password" name="password" className="form-input" />
            </label>
            <ErrorMessage name="password" component="div" className="form-error" />

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
