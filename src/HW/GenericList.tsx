import React from 'react';

interface IItem {
	text: string;
	key: string;
	onClick: (key: string) => void;
	className?: string;
	As?: 'a' | 'li' | 'button' | 'div';
	href?: string;
}

interface IGenericListProps {
	list: IItem[];
}

export const GenericList = ({ list }: IGenericListProps) => {
	return (
		<>
			{list.map(({ As = 'div', text, onClick, className, key, href }) => (
				<As
					className={className}
					onClick={() => onClick(key)}
					key={key}
					href={href}
				>
					{text}
				</As>
			))}
		</>
	);
};

