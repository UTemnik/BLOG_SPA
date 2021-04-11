import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import s from './post.less';
import { PostContent } from './PostContent/PostContent';

interface IPost {
  title?: string;
  setModalOpened?: () => void;
  author: string;
  authorImg: string;
  imgSrc?: string;
  rating: number;
}

const Post = ({ setModalOpened, authorImg, imgSrc, rating, title, author }: IPost) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        setModalOpened?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={s.container}>
      <div className={s.post} ref={ref}>
        <button className={s.close} onClick={setModalOpened}></button>
        <PostContent
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
