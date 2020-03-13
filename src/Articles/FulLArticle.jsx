import React from 'react';
import { formatDistance } from 'date-fns';
import { LikeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

import { actionCreatorsArticle } from '../Store/actions';

class FullArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentArticle.title) { /* Если данные пришли от LiteArticle не запрашиваем по сети */
      return ;
    }
    const { thunkGetArticle, slug } = this.props;
    thunkGetArticle(slug);
  }

  closeButton = (evt) => {
    evt.preventDefault();
    const { history } = this.props;
    history.push('/blog');
  }

  toggleLike = async (evt) => {
    evt.stopPropagation(); /* останавливаем всплытие событий */
    const { thunkFavoriteArticle, thunkDeleteFavoriteActicle, isLoggedIn } = this.props; /* фанки для лайка и анлайка*/ 
    const { slug, favorited } = this.props.currentArticle; /* получаем имя/идентификатор статьи */
    if (!isLoggedIn) { // если не залогинены ничего не делаем
      return;
    }
    if (favorited) { /* если мы лайкали */ 
      thunkDeleteFavoriteActicle(slug);
    } else {
      thunkFavoriteArticle(slug);
    }
  }

  render() {
    if (!this.props.currentArticle.title) { /* Если данные пока не получили ничего не показываем */
      return null;
    }
    /* если данные есть ренденрим компонент */ 
    const { title, author: { username }, createdAt, tagList, favoritesCount, favorited, body, description } = this.props.currentArticle;
    const style = favorited ? 'favorite': '';
    
    return (
      <article className="article-full" >
      <Button className="btn-close" shape="circle" type="primary" onClick={this.closeButton}>x</Button>
      <header className="article-full_header">
        <h3>{username}</h3>
        <div onClick={this.toggleLike} style={{cursor:'pointer'}}>
          <LikeOutlined className={style} />
          <span className={style}>{favoritesCount}</span>
        </div>
      </header>
        <div className="article-full_body" >
          <p className="article-full_title">{title}</p>
          <p className="article-full_text">{body}</p>
          <p className="article-full_description">{description}</p>
          <p className="article-full_tags">{tagList.join(', ')}</p>
          <p className="article-full_date">Created {formatDistance(new Date(), new Date(createdAt))} ago </p>
        </div>
    </article>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    currentArticle: state.currentArticle,
  }
};

export default connect(mapStateToProps, actionCreatorsArticle)(withRouter(FullArticle));