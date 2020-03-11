import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';

import { actionCreatorsArticlesList } from '../Store/actions';

import LiteArticle from './LiteArticle';

class ListArticles extends React.Component {
  componentDidMount() {
    const { thunkAddArticlesList } = this.props;
    thunkAddArticlesList();
  }

  onChange = evt => {
    const { thunkAddArticlesList } = this.props;
    thunkAddArticlesList(evt * 10 - 10);
  }

  render () {
    const { articlesList } = this.props;
    console.log(articlesList)
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
