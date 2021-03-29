import React from 'react';
import { Icon, EIcons } from '../../../globalStyles/Icons/Icon';
import s from './messages.less';

const Messages = () => {
	return (
		<div className={s.messages}>
			<span className={s.numberMessages}>4</span>
			<Icon name={EIcons.messages} size={[20, 16]} />
		</div>
	);
};

export default Messages;
