import React from 'react';
import { formatDistance } from 'date-fns';
import { LikeOutlined } from '@ant-design/icons';

import { favoriteArticle, createArticle } from '../Api/Api'

const LiteArticle = (props) => {
  const { title, author: { username }, createdAt, tagList, favoritesCount, favorited } = props.article;
  const style = favorited ? 'favorite': '';
  
  const toggleLike = async (evt) => {
    evt.preventDefault();
    const { slug } = props.article;
    await favoriteArticle(slug);
  }

  return (
    <article className="article-lite">
      <header className="article-lite_header">
        <h3>{username}</h3>
        <div onClick={toggleLike} style={{cursor:'pointer'}}>
          <LikeOutlined className={style} />
          <span className={style}>{favoritesCount}</span>
        </div>
      </header>
      <div className="article-lite_body">
        <p className="article-lite_title">{title}</p>
        <p className="article-lite_tags">{tagList.join(', ')}</p>
        <p className="article-lite_date">Created {formatDistance(new Date(), new Date(createdAt))} ago </p>
      </div>
    </article>
  )
};

export default LiteArticle;
