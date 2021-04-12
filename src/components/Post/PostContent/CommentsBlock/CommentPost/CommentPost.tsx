import React from 'react';
import { Rating } from '../../../../Content/CardsList/Card/Menu/Rating/Rating';
import { Author } from '../../../../Content/CardsList/Card/TextContent/Author/Author';
import { PublicationTime } from '../../../../Content/CardsList/Card/TextContent/PublicationTime/PublicationTime'
import { CommentBar } from '../CommentBar/CommentBar';
import s from './commentPost.less'

interface ICommentPost {
  authorImg: string;
  author: string;
  comment: string;
  setCommentFormIsOpen: (val: boolean) => void;
  setName: (val: string) => void;
}

export const CommentPost = ({ authorImg, author, comment, setCommentFormIsOpen, setName } : ICommentPost) => {
  return (
    <div className={s.comment}>
      <div className={s.info}>
        <Rating />
        <div className={s.author}>
          <Author author={author} authorImg={authorImg} />
        </div>
        <PublicationTime showPublic={false} />
      </div>
      <div className={s.text}>{comment}</div>
      <CommentBar
        setCommentFormIsOpen={setCommentFormIsOpen}
        setName={setName}
        author={author}
      />
    </div>
  );
};