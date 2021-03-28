import React from 'react';
import { EIcons, Icon } from './../../../Icons/Icon';
import s from './searchBlock.less';

const SearchBlock = () => {
	return (
		<div className={s.searchBlock}>
			<form className={s.form}>
				<input type="text" className={s.input} placeholder="Поиск" />
				<button type="submit" className={s.searchBtn}>
                 <Icon name={EIcons.search} sizeH={19} sizeW={19} />
				</button>
			</form>
		</div>
	);
};

export default SearchBlock;
