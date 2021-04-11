import React, { useEffect, useState } from 'react';
import s from './dropdown.less';

interface IDropdownProps {
	button: React.ReactNode;
	children: React.ReactNode;
	isOpen?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
}

const NOOP = () => {};

export const Dropdown = ({
	button,
	children,
	isOpen,
	onOpen = NOOP,
	onClose = NOOP,
}: IDropdownProps) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

	const handleOpen = () => {
			setIsDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		setIsDropdownOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		isDropdownOpen ? onOpen() : onClose();
	}, [isDropdownOpen]);

	return (
		<div className={s.container}>
			<div onClick={handleOpen}>{button}</div>
			{isDropdownOpen && (
				<div className={s.listContainer}>
					<div className={s.list} onClick={() => setIsDropdownOpen(false)}>
						{children}
					</div>
				</div>
			)}
		</div>
	);
};

