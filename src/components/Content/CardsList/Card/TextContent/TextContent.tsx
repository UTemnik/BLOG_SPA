import React from 'react';
import { EIcons, Icon } from './../../../../../Icons/Icon';
import s from './textContent.less';

const TextContent = () => {
	return (
		<div className={s.textContent}>
			<h2 className={s.title}>
				<a href="#blokId" className={s.postLink}>
					Противоположная точка зрения на данную проблему
				</a>
			</h2>
			<div>
				<div className={s.publicationInfo}>
					<div className={s.publicationTime}>
						{' '}
						<span className={`${s.publicationTime} ${s.wordPublished}`}>
							опубликовано
						</span>{' '}
						3 часа назад
					</div>
					<div className={s.author}>
						<img
							src="https://a.wattpad.com/useravatar/Raddaqk.256.592748.jpg"
							alt="avatar"
							className={s.authorPhoto}
						/>
						<a href="#userId" className={s.authorName}>
							Дмитрий Гришин
						</a>
					</div>
				</div>
				<div className={s.publicationViews}>
					<Icon name={EIcons.views} sizeW={16} sizeH={11} />
					<span className={s.timeViews}>1 час назад</span>
				</div>
			</div>
		</div>
	);
};

export default TextContent;
