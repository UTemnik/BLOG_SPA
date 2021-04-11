import React from 'react';
import PictureBlock from '../../Content/CardsList/Card/PictureBlock/PictureBlock';
import CommentForm from '../CommentForm/CommentForm';
import { Rating } from './../../Content/CardsList/Card/Menu/Rating/Rating';
import { Author } from './../../Content/CardsList/Card/TextContent/Author/Author';
import { PublicationTime } from './../../Content/CardsList/Card/TextContent/PublicationTime/PublicationTime';
import s from './postContent.less';

interface IPostContent {
  rating: number;
  title?: string;
  author: string;
  authorImg: string;
  imgSrc?: string;
}

export const PostContent = ({
  rating,
  title,
  author,
  authorImg,
  imgSrc,
}: IPostContent) => {

  return (
    <>
      <div className={s.header}>
        <Rating rating={rating} />
        <h2>{title}</h2>
        <PublicationTime />
        <Author author={author} authorImg={authorImg} />
      </div>
      <PictureBlock imgSrc={imgSrc} />
      <CommentForm />
    </>
  );
};
