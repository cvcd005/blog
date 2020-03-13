import React from 'react';
import { Link } from 'react-router-dom';

const AddArticleButton = (props) => {
  return (
    <Link  className="btn-addArticle" to="/blog/add">Add article</Link>
  );
};

export default AddArticleButton;
