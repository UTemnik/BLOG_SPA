import React from 'react'
import SearchBlock from './SearchBlock/SearchBlock'
import SortBlock from './SortBlock/SortBlock'
import ThreadTitle from './ThreadTitle.tsx/ThreadTitle'
import s from './header.css'

const Header = () => {
     return (
         <header className={s.header}>
             <SearchBlock />
             <ThreadTitle />
             <SortBlock />
         </header>
     )
}

export default Header;