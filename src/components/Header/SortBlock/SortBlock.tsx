import React from 'react';
import { EIcons, Icon } from '../../../common/Icons/Icon';
import s from './sortBlock.less';

interface ISortBlock {
  showingIcon : boolean; 
}

const SortBlock = ({showingIcon} : ISortBlock) => {
	return (
		<div className={s.sortBlock}>
			{showingIcon && <Icon name={EIcons.rocket} size={[16, 14]} />}
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
