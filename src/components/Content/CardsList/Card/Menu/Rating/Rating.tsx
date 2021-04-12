import React from 'react';
import { EIcons, Icon } from './../../../../../../common/Icons/Icon';
import s from './rating.less';

interface IRating {
  rating?: number;
}

export const Rating = ({ rating }: IRating) => {
  return (
    <div className={s.statistics}>
      <button>
        <Icon name={EIcons.up} size={[19, 10]} className={s.upCounter} />
      </button>

      {rating && <span className={s.appraisal}>{rating}</span>}
      <button>
        <Icon name={EIcons.down} size={[19, 10]} className={s.downCounter} />
      </button>
    </div>
  );
};
