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
}

const Card = ({ imgSrc, author, title, rating, authorImg }: ICard) => {
  return (
    <li className={s.card}>
      <PictureBlock imgSrc={imgSrc} />
      <TextContent
        author={author}
        title={title}
        authorImg={authorImg}
        imgSrc={imgSrc}
      />
      <Menu rating={rating} />
    </li>
  );
};

export default Card;
