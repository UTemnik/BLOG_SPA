import React from 'react';
import s from './card.css';
import Menu from './Menu/Menu';
import PictureBlock from './PictureBlock/PictureBlock';
import TextContent from './TextContent/TextContent';

const Card = () => {
	return (
		<li className={s.card}>
			<PictureBlock />
			<TextContent />
			<Menu />
		</li>
	);
};

export default Card;
