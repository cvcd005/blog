import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Spin, Col, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { actionCreatorsArticle } from '../Store/actions';

const validSchema = Yup.object({
  title: Yup.string()
    .required("You must enter title"),
  description: Yup.string()
    .required("You must enter description"),
  body: Yup.string()
  .required("You must enter description"),
});



const AddArticle = (props) => {
  const { thunkCreateArticle } = props;
  
  const closeButton = (evt) => {
    evt.preventDefault();
    const { history } = props;
    history.push('/blog');
  }

  const submitForm = async (values, { setSubmitting, setFieldError, resetForm }) => {
    try {
      await thunkCreateArticle(values);
    }
    catch (error) {
  
    }
    finally {
      setSubmitting(false);
      resetForm();
    }
  }

  return (
    <Col xs={22} md={12} xl={6} className="form-wrapper">
       <Button className="btn-close" shape="circle" type="primary" onClick={closeButton}>x</Button>
      <h2 className="form-header">Create New Article</h2>
      <Formik
        initialValues={{ title: '', description: '', body: '', tagList: [] }}
        validationSchema={validSchema}
        onSubmit={submitForm}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <label htmlFor="title"><span className="form-label">Title</span>
              <Field type="text" name="title" className="form-input" />
            </label>
            <ErrorMessage name="title" component="div" className="form-error" />
  
            <label htmlFor="description"><span className="form-label">Description</span>
              <Field type="text" name="description" className="form-input" />
            </label>
            <ErrorMessage name="description" component="div" className="form-error"/>

            <label htmlFor="body"><span className="form-label">Body</span>
              <Field name="body" className="form-textarea" as="textarea" />
            </label>
            <ErrorMessage name="description" component="div" className="form-error"/>

            <label htmlFor="tagList"><span className="form-label">Tags</span>
              <Field type="text" name="tagList" className="form-input" />
            </label>
            <ErrorMessage name="tagList" component="div" className="form-error"/>
            
            {props.isSubmitting ? (
                <Spin />
              ) : (
                <button type="submit" className="btn-primary">
              Create 
            </button>
              )}
          </Form>
        )}
      </Formik>
    </Col>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps, actionCreatorsArticle)(withRouter(AddArticle));
