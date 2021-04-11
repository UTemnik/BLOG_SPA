import React from 'react';
import { EIcons, Icon } from '../../../../../common/Icons/Icon';
import { Author } from './Author/Author';
import { PublicationTime } from './PublicationTime/PublicationTime';
import s from './textContent.less';
import Title from './Title/Title';

interface ITextContent {
  author: string;
  authorImg: string;
  title?: string;
  imgSrc?: string;
  rating: number;
}

const TextContent = ({
  author,
  title,
  authorImg,
  imgSrc,
  rating,
}: ITextContent) => {
  return (
    <div className={s.textContent}>
      <Title
        author={author}
        title={title}
        authorImg={authorImg}
        imgSrc={imgSrc}
        rating={rating}
      />
      <div>
        <div className={s.publicationInfo}>
          <PublicationTime />
          <Author author={author} authorImg={authorImg}  />
        </div>
        <div className={s.publicationViews}>
          <Icon name={EIcons.views} size={[16, 11]} />
          <span className={s.timeViews}>1 час назад</span>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
