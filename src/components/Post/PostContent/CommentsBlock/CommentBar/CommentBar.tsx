import React from 'react';
import { Icon, EIcons } from '../../../../../common/Icons/Icon';
import s from './commentBar.less';

interface ICommentBar {
  setCommentFormIsOpen: (val: boolean) => void;
  setName: (val: string) => void;
  author: string;
}

export const CommentBar = ({
  setCommentFormIsOpen,
  setName,
  author,
}: ICommentBar) => {

  const handleClick = () => {
    setCommentFormIsOpen(true);
    setName(`${author}, `);
  };
  return (
    <ul className={s.list}>
      <li className={s.comments} onClick={handleClick}>
        <Icon name={EIcons.comments} size={[15, 15]} />
        Ответить
      </li>
      <li className={s.share}>
        <Icon name={EIcons.share} size={[12, 14]} />
        Поделиться
      </li>
      <li className={s.complain}>
        <Icon name={EIcons.complain} size={[16, 14]} />
        Пожаловаться
      </li>
    </ul>
  );
};
