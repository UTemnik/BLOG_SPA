import React from 'react';
import s from './card.less';
import Menu from './Menu/Menu';
import PictureBlock from './PictureBlock/PictureBlock';
import TextContent from './TextContent/TextContent';

interface ICard {
  imgSrc?: string;
  title?: string;
  author: string;
  authorImg: string;
  rating: number;
  comments : {[key in string]:string}[];
}

export const Card = ({ imgSrc, author, title, rating, authorImg, comments }: ICard) => {
   
  return (
    <li className={s.card}>
      <PictureBlock imgSrc={imgSrc} />
      <TextContent
        author={author}
        title={title}
        authorImg={authorImg}
        imgSrc={imgSrc}
        rating={rating}
        comments={comments}
      />
      <Menu rating={rating} />
    </li>
  );
};


