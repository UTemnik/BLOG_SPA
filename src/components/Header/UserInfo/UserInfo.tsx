import React from 'react';
import Text, { EColors } from './../../../common/Text/Text';
import { Icon, EIcons } from './../../../common/Icons/Icon';

import s from './userInfo.less';

interface IUserInfo {
  avatarSrc?: string,
  userName?: string
}

const UserInfo = ({ avatarSrc, userName }: IUserInfo) => {
  return (
    <a href="https://www.reddit.com/api/v1/authorize?client_id=1q5GN1Z5X-jn1g&response_type=token&
    state=randow_stringG&redirect_uri=http://localhost:3000/auth&scope=read submit identity"
      className={s.userBox}>
      <div className={s.userInfo}>
        <div className={s.avatarBlock}>
          {
            avatarSrc
              ? <img
                className={s.avatar}
                src="https://i.ebayimg.com/thumbs/images/g/FvUAAOSw0BVepzn2/s-l96.jpg"
                alt="userPhoto"
              /> : <Icon name={EIcons.anonim} size={[50, 50]} />
          }

        </div>
        <Text size={20} color={EColors.grey99}>{userName || 'Аноним'}</Text>
      </div>
    </a>
  );
};

export default UserInfo;
