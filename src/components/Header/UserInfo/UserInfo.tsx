import React from 'react';
import { Icon, EIcons } from './../../../common/Icons/Icon';

import s from './userInfo.less';

interface IUserInfo {
  iconImg?: string;
  userName?: string;
}

const UserInfo = ({ iconImg, userName }: IUserInfo) => {

  const CLIENT_ID = 'NZI7wqgUP_0uFw';
  const TYPE = 'token';
  const URI = 'http://localhost:3000';

  const authUrl = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=randow_string&redirect_uri=${URI}&scope=read submit identity`;
  return (
    <>
      <a href={authUrl} className={s.userBox}>
        <div className={s.userInfo}>
          <div className={s.avatarBlock}>
            {iconImg ? (
              <img className={s.avatar} src={iconImg} alt="userPhoto" />
            ) : (
              <Icon name={EIcons.anonim} size={[50, 50]} />
            )}
          </div>
          <div className={s.userName}>{userName || 'Аноним'}</div>
        </div>
      </a>
    </>
  );
};

export default UserInfo;
