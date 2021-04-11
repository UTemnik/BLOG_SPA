import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Rating } from '../Content/CardsList/Card/Menu/Rating/Rating';
import PictureBlock from '../Content/CardsList/Card/PictureBlock/PictureBlock';
import CommentForm from './CommentForm/CommentForm';
import s from './post.less';

interface IPost {
  setModalOpened?: () => void;
  authorImg: string;
  imgSrc?: string;
}

const Post = ({ setModalOpened, authorImg, imgSrc }: IPost) => {
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
        <div className={s.header}>
          <PictureBlock imgSrc={imgSrc} />
          <Rating rating={135} />
        </div>
        <CommentForm />
      </div>
    </div>,
    node
  );
};

export default Post;
