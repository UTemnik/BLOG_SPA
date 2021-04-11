import React from 'react';
import s from './publicationTime.less'

export const PublicationTime = () => {
  return (
    <div className={s.publicationTime}>
      <span className={`${s.publicationTime} ${s.wordPublished}`}>
        опубликовано{' '}
      </span>
      3 часа назад
    </div>
  );
}