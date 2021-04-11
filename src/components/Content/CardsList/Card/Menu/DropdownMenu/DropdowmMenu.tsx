import React from 'react';
import s from './dropdownMenu.less';
import { EIcons, Icon } from '../../../../../../common/Icons/Icon';

const DropdownMenu = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.comments}>
          <Icon name={EIcons.comments} size={[15, 15]} />
          Комментарии
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
        <li className={s.closeElem}>
          <button>Закрыть</button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
