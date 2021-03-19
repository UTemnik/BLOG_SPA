import React from 'react';
import s from './layout.css'

interface ILayoutProps {
	children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	return <div className={s.layout}>
        {children}
    </div>;
};

export default Layout;
