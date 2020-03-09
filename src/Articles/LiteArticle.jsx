import React from 'react';
import { formatDistance } from 'date-fns';
import { LikeOutlined } from '@ant-design/icons';

const LiteArticle = (props) => {
  const { title, author: { username }, createdAt, tagList, favoritesCount } = props.article;
  return (
    <article className="article-lite">
      <header className="article-lite_header">
        <h3>{username}</h3>
        <div>
          <LikeOutlined />
          <span>{favoritesCount}</span>
        </div>
      </header>
      <div className="article-lite_body">
        <p className="article-lite_title">{title}</p>
        <p className="article-lite_tags">{tagList.join(', ')}</p>
        <p className="article-lite_date">Created {formatDistance(new Date, new Date(createdAt))} ago </p>
      </div>
    </article>
  )
};

export default LiteArticle;
