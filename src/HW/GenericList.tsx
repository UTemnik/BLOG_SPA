import React from 'react';

interface IItem {
	value : string;
	id : string;
}

interface IMyListProps {
	list : IItem[];
	onClick : (id:string) => void;
}

export const MyList = ({list, onClick} : IMyListProps) => {
	return (
		<ul>
            {list.map((item : IItem) => (
                 <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
			))}
		</ul>
	)
}
