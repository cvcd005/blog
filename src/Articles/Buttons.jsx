import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const EditArticleButton = (props) => {
  if (!props.currentArticle.title) { /* Если данные пока не получили ничего не показываем */
    return null;
  }
  const {slug} = props.match.params;
  const { username } = props.user;
  const { currentArticle } = props;

  if (username === currentArticle.author.username) {
    return (
      <Link className="btn-addArticle" to={`${slug}/edit`}>Edit</Link>
    );
  }
    return null;
}; 

const mapStateToProps = (state) => {
  return {
    currentArticle: state.currentArticle,
    user: state.user,
  }
};

EditArticleButton.propTypes = {
  currentArticle:PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(EditArticleButton);

export const AddArticleButton = () => {
  return (
    <Link  className="btn-addArticle" to="/blog/add">Add article</Link>
  );
};
