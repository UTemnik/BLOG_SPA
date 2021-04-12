import React, { useContext } from 'react';
import s from './commentsBlock.less';
import { CommentPost } from './CommentPost/CommentPost';

interface ICommentsBlock {
  comments: { [key in string]: string }[];
  setCommentFormIsOpen: (val: boolean) => void;
  setName: (val: string) => void;
}

export const CommentsBlock = ({ comments, setCommentFormIsOpen, setName }: ICommentsBlock) => {
  return (
    <div className={s.wrapper}>
      {!!comments
        ? comments.map((elem) => {
            return (
              <CommentPost
                setName={setName}
                setCommentFormIsOpen={setCommentFormIsOpen}
                key={elem.id}
                author={elem['name']}
                authorImg={elem['icon_url']}
                comment={elem['description']}
              />
            );
          })
        : null}
    </div>
  );
};
