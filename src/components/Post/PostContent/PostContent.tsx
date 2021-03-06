import React, { useState } from 'react';
import { onError } from '../../../utils/onError';
import CommentForm from './CommentForm/CommentForm';
import { Rating } from './../../Content/CardsList/Card/Menu/Rating/Rating';
import { Author } from './../../Content/CardsList/Card/TextContent/Author/Author';
import { PublicationTime } from './../../Content/CardsList/Card/TextContent/PublicationTime/PublicationTime';
import s from './postContent.less';
import { OptionsMenu } from './OptionsMenu/OptionsMenu';
import SortBlock from '../../Header/SortBlock/SortBlock';
import { CommentsBlock } from './CommentsBlock/CommentsBlock';

interface IPostContent {
  rating: number;
  title?: string;
  author: string;
  authorImg: string;
  imgSrc?: string;
  comments: { [key in string]: string }[];
}

export const PostContent = ({
  rating,
  title,
  author,
  authorImg,
  imgSrc,
  comments
}: IPostContent) => {
  const [commentFormIsOpen, setCommentFormIsOpen] = useState(false);
  const [name, setName] = useState('');
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.statistics}>
          <Rating rating={rating} />
        </div>
        <div>
          <h2 className={s.title}>{title}</h2>
          <div className={s.publicationInfo}>
            <PublicationTime showPublic={true} />
            <Author author={author} authorImg={authorImg} />
          </div>
        </div>
      </div>
      <img src={imgSrc} alt="picture" className={s.picture} onError={onError} />
      <OptionsMenu />
      {commentFormIsOpen && <CommentForm name={name} />}

      <div className={s.sortBlock}>
        <span>Сортировать по :</span>
        <SortBlock showingIcon={false} />
      </div>
      <CommentsBlock
        comments={comments}
        setCommentFormIsOpen={setCommentFormIsOpen}
        setName={setName}
      />
    </div>
  );
};
