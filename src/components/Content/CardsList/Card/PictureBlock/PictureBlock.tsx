import React from 'react';
import s from './pictureBlock.css';

const PictureBlock = () => {
	return (
		<>
			<a href="#blokId" className={s.linkBlock} />
			<img
				src="https://www.soyuz.ru/public/uploads/files/2/7397870/20191212152501852f43f3ba.jpg"
				alt="picture"
				className={s.picture}
			/>
		</>
	);
};

export default PictureBlock;
