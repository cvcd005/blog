import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';

import { getArticlesList } from '../Api/Api';
import { actionCreatorsArticlesList } from '../Store/actions';

import LiteArticle from './LiteArticle';

class ListArticles extends React.Component {
  async componentDidMount() {
    const response = await getArticlesList();
    const { addArticlesList } = this.props;
    addArticlesList(response.data.articles);
  }

  onChange = async (evt) => {
    const response = await getArticlesList(evt * 10 - 10);
    const { addArticlesList } = this.props;
    addArticlesList(response.data.articles);
  }

  render () {
    const { articlesList } = this.props;
    return (
    <div>
      <div className="articles-list">
        {articlesList.map(el => <LiteArticle article={el} key={el.slug} />) }
      </div>
      <Pagination total={500} onChange={this.onChange} className="pagination"/>
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
