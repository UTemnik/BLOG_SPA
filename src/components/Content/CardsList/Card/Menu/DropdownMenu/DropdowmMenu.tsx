import React from 'react';
import ShareIcon from './../../../../../../Icons/ShareIcon';
import CommentsIcon from './../../../../../../Icons/CommentsIcon';
import s from './dropdownMenu.less';
import HideIcon from './../../../../../../Icons/HideIcon';
import SaveIcon from './../../../../../../Icons/SaveIcon';

interface IDropdownMenuProps {
	postId?: string;
}

const DropdownMenu = ({ postId }: IDropdownMenuProps) => {
	return (
		<div className={s.container}>
			<ul className={s.list}>
				<li className={s.comments}>
					<CommentsIcon />
					Комментарии
				</li>
				<li className={s.share}>
					<ShareIcon />
					Поделиться
				</li>
				<li className={s.hide}>
					<HideIcon />
					Скрыть
				</li>
				<li className={s.save}>
					<SaveIcon />
					Сохранить
				</li>
				<li className={s.complain}>
					<CommentsIcon />
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
