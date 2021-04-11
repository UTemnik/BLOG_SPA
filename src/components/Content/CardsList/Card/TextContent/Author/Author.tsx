import React from 'react';
import s from './author.less';

interface IAuthor {
  authorImg: string;
  author: string;
}

export const Author = ({author, authorImg}  : IAuthor) => {
  return (
    <div className={s.author}>
      <img src={authorImg} alt="avatar" className={s.authorPhoto} />
      <a href="#userId" className={s.authorName}>
        {author}
      </a>
    </div>
  );
};
