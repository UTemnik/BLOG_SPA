import React from 'react';
import s from './card.css';
import Menu from './Menu/Menu';
import TextContent from './TextContent/TextContent';

const Card = () => {
	return (
		<li className={s.card}>
			<a href="#blokId" className={s.linkBlock} />
			<img
				src="https://www.soyuz.ru/public/uploads/files/2/7397870/20191212152501852f43f3ba.jpg"
				alt="picture"
				className={s.picture}
			/>
            <TextContent />
            <Menu />
		</li>
	);
};

export default Card;
