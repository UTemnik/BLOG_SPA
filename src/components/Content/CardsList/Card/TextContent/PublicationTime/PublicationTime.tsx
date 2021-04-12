import React from 'react';
import s from './publicationTime.less';

interface IPublicationTime {
  showPublic: boolean;
}

export const PublicationTime = ({ showPublic }: IPublicationTime) => {
  return (
    <div className={s.publicationTime}>
      {showPublic && (
        <span className={`${s.publicationTime} ${s.wordPublished}`}>
          опубликовано{' '}
        </span>
      )}
      3 часа назад
    </div>
  );
};
