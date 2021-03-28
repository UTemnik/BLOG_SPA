import React from 'react';
import { Icon , EIcons} from './../../../Icons/Icon';
import s from './messages.less';

const Messages = () => {
	return (
		<div className={s.messages}>
			<span className={s.numberMessages}>4</span>
		    <Icon name={EIcons.messages} sizeW={20} sizeH={16} />
		</div>
	);
};

export default Messages;
