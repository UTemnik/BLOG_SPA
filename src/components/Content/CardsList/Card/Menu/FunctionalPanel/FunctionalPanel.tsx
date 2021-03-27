import React from 'react';
import StatisticsIcon from './../../../../../../Icons/StatisticsIcon';
import CommentsIcon from './../../../../../../Icons/CommentsIcon';
import s from './functionalPanel.less';
import ShareNotGroundIcon from './../../../../../../Icons/ShareNotGroundIcon';
import DeleteIcon from './../../../../../../Icons/DeleteIcon';

const FunctionalPanel = () => {
	return (
		<div className={s.functionalPanel}>
			<button className={s.commentsBtn}>
				<CommentsIcon />
				14
			</button>
			<div className={s.actionButtons}>
				<button className={s.statisticsBtn}>
					<StatisticsIcon />
				</button>
				<button className={s.shareBtn}>
					<ShareNotGroundIcon />
				</button>
				<button className={s.deleteBtn}>
					<DeleteIcon />
				</button>
			</div>
		</div>
	);
};

export default FunctionalPanel;
