import React from 'react';
import s from './pictureBlock.less';

interface IPictureBlock {
  imgSrc?: string;
}

const PictureBlock = ({ imgSrc }: IPictureBlock) => {
  return (
    <div className={s.wrapper}>
      <a href="#blokId" className={s.linkBlock} />
      <img
        src={
          imgSrc === 'default'
            ? 'https://htstatic.imgsmail.ru/pic_image/7ae8d4d537fa85a2b10d1869d0661c4f/840/745/1668925/'
            : imgSrc
        }
        alt="picture"
        className={s.picture}
      />
    </div>
  );
};

export default PictureBlock;
