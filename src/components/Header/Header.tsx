import React from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import SortBlock from './SortBlock/SortBlock';
import ThreadTitle from './ThreadTitle.tsx/ThreadTitle';
import s from './header.less';
import Messages from './Messages/Messages';
import UserInfo from './UserInfo/UserInfo';
import { useUserData } from './../../hooks/useUserData';

interface IHeaderProps {
  accessToken: string;
}

const Header = ({ accessToken }: IHeaderProps) => {

  const [data] = useUserData(accessToken);

  return (
    <header className={s.header}>
      <SortBlock />
      <ThreadTitle />
      <Messages />
      <SearchBlock />
      <UserInfo iconImg={data.iconImg} userName={data.userName} />
    </header>
  );
};

export default Header;
