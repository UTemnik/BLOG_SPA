import React from 'react';
import { EIcons, Icon } from '../../../../common/Icons/Icon';
import s from './optionsMenu.less';


export const OptionsMenu = () => {
  return (
    <ul className={s.optionsMenu}>
      <li className={s.comments}>
        <Icon name={EIcons.comments} size={[15, 15]} />
        22 комментария
      </li>
      <li className={s.share}>
        <Icon name={EIcons.share} size={[12, 14]} />
        Поделиться
      </li>
      <li className={s.hide}>
        <Icon name={EIcons.hide} size={[14, 14]} />
        Скрыть
      </li>
      <li className={s.save}>
        <Icon name={EIcons.save} size={[14, 14]} />
        Сохранить
      </li>
      <li className={s.complain}>
        <Icon name={EIcons.complain} size={[16, 14]} />
        Пожаловаться
      </li>
      <li>54% Проголосовали</li>
    </ul>
  );
};
