import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';

import { actionCreatorsArticlesList } from '../Store/actions';

import LiteArticle from './LiteArticle';

class ListArticles extends React.Component {
  componentDidMount() {
    const { thunkGetArticlesList } = this.props;
    thunkGetArticlesList();
  }

  onChange = evt => {
    const { thunkGetArticlesList } = this.props;
    thunkGetArticlesList(evt * 10 - 10);
  }

  render () {
    const { articlesList } = this.props;
    console.log(articlesList)
    return (
    <div>
      <div className="articles-list">
        {articlesList.map(el => <LiteArticle article={el} key={el.slug} />) }
      </div>
      <Pagination total={500} onChange={this.onChange} defaultCurrent={1} className="pagination"/>
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
