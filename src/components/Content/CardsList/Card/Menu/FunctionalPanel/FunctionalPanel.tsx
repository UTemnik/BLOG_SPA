import React from 'react';
import s from './functionalPanel.less';
import { EIcons, Icon } from '../../../../../../common/Icons/Icon';

const FunctionalPanel = () => {
	return (
		<div className={s.functionalPanel}>
			<button className={s.commentsBtn}>
				<Icon name={EIcons.comments} size={[14, 14]} />
				14
			</button>
			<div className={s.actionButtons}>
				<button className={s.statisticsBtn}>
					<Icon name={EIcons.statistics} size={[20, 20]} />
				</button>
				<button className={s.shareBtn}>
					<Icon name={EIcons.shareNotGround} size={[20, 20]} />
				</button>
				<button className={s.deleteBtn}>
					<Icon name={EIcons.delete} size={[20,20]} />
				</button>
			</div>
		</div>
	);
};

export default FunctionalPanel;
