import React, { useContext } from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import SortBlock from './SortBlock/SortBlock';
import ThreadTitle from './ThreadTitle.tsx/ThreadTitle';
import s from './header.less';
import Messages from './Messages/Messages';
import UserInfo from './UserInfo/UserInfo';
import { userContext } from './../../context/userContext';

const Header = () => {

  const {iconImg, userName} = useContext(userContext);

  return (
    <header className={s.header}>
      <SortBlock />
      <ThreadTitle />
      <Messages />
      <SearchBlock />
      <UserInfo iconImg={iconImg} userName={userName} />
    </header>
  );
};

export default Header;
