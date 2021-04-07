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
          imgSrc === 'self'
            ? 'https://www.soyuz.ru/public/uploads/files/2/7397870/20191212152501852f43f3ba.jpg'
            : imgSrc
        }
        alt="picture"
        className={s.picture}
      />
    </div>
  );
};

export default PictureBlock;
