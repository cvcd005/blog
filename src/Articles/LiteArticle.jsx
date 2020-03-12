import React from 'react';
import { formatDistance } from 'date-fns';
import { LikeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { actionCreatorsArticle } from '../Store/actions';

const LiteArticle = (props) => {
  
  const toggleLike = async (evt) => {
    evt.stopPropagation();/* останавливаем всплытие событий */
    const { thunkFavoriteArticle, thunkDeleteFavoriteActicle, isLoggedIn } = props; /* фанки для лайка и анлайка*/ 
    const { slug } = props.article; /* получаем имя/идентификатор статьи */
    if (!isLoggedIn) { // если не залогинены ничего не делаем
      return;
    }
    if (favorited) { /* если мы лайкали */ 
      thunkDeleteFavoriteActicle(slug);
    } else {
      thunkFavoriteArticle(slug);
    }
  }

  const openFullArticle = () => { 
    const { slug } = props.article; /* получаем адрес статьи */ 
    const { history, addArticle } = props; /* достаем объект хистори из WithRouter */ 
    addArticle(props.article); /* добавляем в стейт статью */ 
    history.push(`/blog/articles/${slug}`); /* пушим в урл название статьи */
  }

  const { title, author: { username }, createdAt, tagList, favoritesCount, favorited } = props.article;
  const style = favorited ? 'favorite': '';

  return (
    <article className="article-lite" onClick={openFullArticle}>
      <header className="article-lite_header">
        <h3>{username}</h3>
        <div onClick={toggleLike} style={{cursor:'pointer'}}>
          <LikeOutlined className={style} />
          <span className={style}>{favoritesCount}</span>
        </div>
      </header>
        <div className="article-lite_body" >
          <p className="article-lite_title">{title}</p>
          <p className="article-lite_tags">{tagList.join(', ')}</p>
          <p className="article-lite_date">Created {formatDistance(new Date(), new Date(createdAt))} ago </p>
        </div>
    </article>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps, actionCreatorsArticle)(withRouter(LiteArticle));
