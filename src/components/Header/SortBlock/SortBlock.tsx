import React from 'react';
import { EIcons, Icon } from '../../../globalStyles/Icons/Icon';
import s from './sortBlock.less';

const SortBlock = () => {
	return (
		<div className={s.sortBlock}>
			<Icon name={EIcons.rocket} size={[16, 14]} />
			<div className={s.selectBlock}>
				<select className={s.select}>
					<option>Лучшие</option>
					<option>Новые</option>
				</select>
			</div>
		</div>
	);
};

export default SortBlock;
