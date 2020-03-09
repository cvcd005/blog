import React from 'react';
import { connect } from 'react-redux';

import { getArticlesList } from '../Api/Api';
import { actionCreatorsArticlesList } from '../Store/actions';

import LiteArticle from './LiteArticle';

class ListArticles extends React.Component {
  async componentDidMount() {
    const response = await getArticlesList();
    const { addArticlesList } = this.props;
    console.log(response.data.articles);
    addArticlesList(response.data.articles);
  }

  render () {
    const { articlesList } = this.props;
    return (
    <div className="articles-list">
      {articlesList.map(el => <LiteArticle article={el} key={el.slug} />) }
    </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    articlesList: state.articlesList,
  }
};

export default connect(mapStateToProps, actionCreatorsArticlesList)(ListArticles);
