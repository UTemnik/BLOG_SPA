import React from 'react';
import ReactDOM from 'react-dom';
import { useClickOutsideElem } from './../../hooks/useClickOutsideElem';
import s from './post.less';
import { PostContent } from './PostContent/PostContent';

interface IPost {
  title?: string;
  setModalOpened: (val: boolean) => void;
  author: string;
  authorImg: string;
  imgSrc?: string;
  rating: number;
  comments: { [key in string]: string }[];
}

const Post = ({ setModalOpened, authorImg, imgSrc, rating, title, author, comments }: IPost) => {
  const ref = useClickOutsideElem(setModalOpened);
  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={s.container}>
      <div className={s.post} ref={ref}>
        <button className={s.close} onClick={() => setModalOpened(false)}></button>
        <PostContent
          comments={comments}
          rating={rating}
          title={title}
          imgSrc={imgSrc}
          author={author}
          authorImg={authorImg}
        />
      </div>
    </div>,
    node
  );
};

export default Post;
