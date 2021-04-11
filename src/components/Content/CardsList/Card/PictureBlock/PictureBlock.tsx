import React from 'react';
import { onError } from '../../../../../common/fc/onError';
import s from './pictureBlock.less';

interface IPictureBlock {
  imgSrc?: string;
}

const PictureBlock = ({ imgSrc}: IPictureBlock) => {

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
