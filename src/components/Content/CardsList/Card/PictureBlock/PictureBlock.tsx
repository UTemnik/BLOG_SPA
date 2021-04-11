import React from 'react';
import s from './pictureBlock.less';

interface IPictureBlock {
  imgSrc?: string;
}

const PictureBlock = ({ imgSrc }: IPictureBlock) => {
  const onError = (event: React.ChangeEvent<HTMLImageElement>): void => {
    event.target.src =
      'https://www.meme-arsenal.com/memes/e0f849e6a9012d248cb008a07ac49a93.jpg';
  };

  return (
    <div className={s.wrapper}>
      <a href="#blokId" className={s.linkBlock} />
      <img
        id={imgSrc}
        src={imgSrc}
        onError={onError}
        alt="picture"
        className={s.picture}
      />
    </div>
  );
};

export default PictureBlock;
