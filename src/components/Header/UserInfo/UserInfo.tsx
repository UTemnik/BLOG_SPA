import React from 'react';

import s from './userInfo.less';

const UserInfo = () => {
	return (
		<div className={s.userInfo}>
			<div className={s.avatarBlock}>
				<img
					className={s.avatar}
					src="https://i.ebayimg.com/thumbs/images/g/FvUAAOSw0BVepzn2/s-l96.jpg"
					alt="userPhoto"
				/>
			</div>
			<span className={s.userName}>Юлия</span>
		</div>
	);
};

export default UserInfo;
