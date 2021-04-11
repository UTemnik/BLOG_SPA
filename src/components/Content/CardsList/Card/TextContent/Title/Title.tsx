import React, { useState } from 'react';
import Post from './../../../../../Post/Post';
import s from './../textContent.less';

interface ITitle {
  title?: string;
  authorImg: string;
  imgSrc?: string;
}

const Title = ({ title, authorImg, imgSrc }: ITitle) => {
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <h2 className={s.title}>
      <a
        href="#blockId"
        className={s.postLink}
        onClick={() => {
          setModalOpened(true);
        }}
      >
        {title}
      </a>
      {isModalOpened && (
        <Post
          imgSrc={imgSrc}
          authorImg={authorImg}
          setModalOpened={() => setModalOpened(false)}
        />
      )}
    </h2>
  );
};

export default Title;
