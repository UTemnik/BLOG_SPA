import React from 'react';
import s from './dropdownMenu.less';
import { EIcons, Icon } from './../../../../../../Icons/Icon';

interface IDropdownMenuProps {
	postId?: string;
}

const DropdownMenu = ({ postId }: IDropdownMenuProps) => {
	return (
		<div className={s.container}>
			<ul className={s.list}>
				<li className={s.comments}>
					<Icon name={EIcons.comments} sizeW={15} sizeH={15} />
					Комментарии
				</li>
				<li className={s.share}>
					<Icon name={EIcons.share} sizeW={12} sizeH={14} />
					Поделиться
				</li>
				<li className={s.hide}>
					<Icon name={EIcons.hide} sizeW={14} sizeH={14} />
					Скрыть
				</li>
				<li className={s.save}>
					<Icon name={EIcons.save} sizeW={14} sizeH={14} />
					Сохранить
				</li>
				<li className={s.complain}>
					<Icon name={EIcons.complain} sizeW={16} sizeH={14} />
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
