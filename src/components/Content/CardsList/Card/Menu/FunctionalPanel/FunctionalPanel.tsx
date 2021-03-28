import React from 'react';
import s from './functionalPanel.less';
import { EIcons, Icon } from './../../../../../../Icons/Icon';

const FunctionalPanel = () => {
	return (
		<div className={s.functionalPanel}>
			<button className={s.commentsBtn}>
				<Icon name={EIcons.comments} sizeW={14} sizeH={14} />
				14
			</button>
			<div className={s.actionButtons}>
				<button className={s.statisticsBtn}>
					<Icon name={EIcons.statistics} sizeW={20} sizeH={20} />
				</button>
				<button className={s.shareBtn}>
					<Icon name={EIcons.shareNotGround} sizeW={20} sizeH={20} />
				</button>
				<button className={s.deleteBtn}>
					<Icon name={EIcons.delete} sizeW={20} sizeH={20} />
				</button>
			</div>
		</div>
	);
};

export default FunctionalPanel;
