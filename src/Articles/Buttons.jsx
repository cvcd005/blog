import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
    isLoggedIn: state.isLoggedIn,
    currentArticle: state.currentArticle,
    user: state.user,
  }
};

export const AddArticleButton = () => {
  return (
    <Link  className="btn-addArticle" to="/blog/add">Add article</Link>
  );
};

export default connect(mapStateToProps)(EditArticleButton);
