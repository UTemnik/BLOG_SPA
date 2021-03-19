import React from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import SortBlock from './SortBlock/SortBlock';
import ThreadTitle from './ThreadTitle.tsx/ThreadTitle';
import s from './header.css';
import Messages from './Messages/Messages';
import UserInfo from './UserInfo/UserInfo';

const Header = () => {
	return (
		<header className={s.header}>
			<SortBlock />
			<ThreadTitle />
			<Messages />
			<SearchBlock />
			<UserInfo />
		</header>
	);
};

export default Header;
