import React from 'react';

export enum EIcons {
	comments = 'comments',
	complain = 'complain',
	delete = 'delete',
	down = 'down',
	hide = 'hide',
	menu = 'menu',
	messages = 'messages',
	save = 'save',
	share = 'share',
	shareNotGround = 'shareNotGround',
	search = 'search',
	statistics = 'statistics',
	up = 'up',
	views = 'views',
	rocket = 'rocket',
}

interface IIconProps {
	name: EIcons;
	size: [number, number];
	className?: string;
}

export const Icon = ({ name, className, size = [0, 0] }: IIconProps) => {
	let result;
	switch (name) {
		case 'comments':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z"
						fill="#999999"
					/>
				</svg>
			);
			break;
		case 'delete':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="10" cy="10" r="10" fill="#C4C4C4" />
					<path
						d="M6.57143 13.8889C6.57143 14.5 7.08571 15 7.71429 15H12.2857C12.9143 15 13.4286 14.5 13.4286 13.8889V7.22222H6.57143V13.8889ZM7.71429 8.33333H12.2857V13.8889H7.71429V8.33333ZM12 5.55556L11.4286 5H8.57143L8 5.55556H6V6.66667H14V5.55556H12Z"
						fill="white"
					/>
				</svg>
			);
			break;
		case 'complain':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 16 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z"
						fill="#999999"
					/>
				</svg>
			);
			break;
		case 'down':
			result = (
				<svg
					className={className}
					width={size[0]}
					height={size[1]}
					viewBox="0 0 19 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9" />
				</svg>
			);
			break;
		case 'hide':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z"
						fill="#999999"
					/>
				</svg>
			);
			break;
		case 'menu':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 5 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
					<circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
					<circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
				</svg>
			);
			break;
		case 'save':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z"
						fill="#979797"
					/>
				</svg>
			);
			break;
		case 'share':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 12 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z"
						fill="#999999"
					/>
				</svg>
			);
			break;
		case 'shareNotGround':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="10" cy="10" r="10" fill="#C4C4C4" />
					<path
						d="M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z"
						fill="white"
					/>
				</svg>
			);
			break;
		case 'statistics':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="10" cy="10" r="10" fill="#C4C4C4" />
					<path
						d="M12.1 6L13.5885 7.52667L10.4165 10.78L7.8165 8.11333L3 13.06L3.9165 14L7.8165 10L10.4165 12.6667L14.5115 8.47333L16 10V6H12.1Z"
						fill="white"
					/>
				</svg>
			);
			break;
		case 'up':
			result = (
				<svg
					className={className}
					width={size[0]}
					height={size[1]}
					viewBox="0 0 19 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
				</svg>
			);
			break;
		case 'views':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 16 11"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 0C4.36364 0 1.25818 2.28067 0 5.5C1.25818 8.71933 4.36364 11 8 11C11.6364 11 14.7418 8.71933 16 5.5C14.7418 2.28067 11.6364 0 8 0ZM8 9.16667C5.99273 9.16667 4.36364 7.524 4.36364 5.5C4.36364 3.476 5.99273 1.83333 8 1.83333C10.0073 1.83333 11.6364 3.476 11.6364 5.5C11.6364 7.524 10.0073 9.16667 8 9.16667ZM8 3.3C6.79273 3.3 5.81818 4.28267 5.81818 5.5C5.81818 6.71733 6.79273 7.7 8 7.7C9.20727 7.7 10.1818 6.71733 10.1818 5.5C10.1818 4.28267 9.20727 3.3 8 3.3Z"
						fill="#999999"
					/>
				</svg>
			);
			break;
		case 'messages':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 20 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
						fill="#CC6633"
					/>
				</svg>
			);
			break;
		case 'search':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 19 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.5792 11.9497H12.721L12.4168 11.6564C13.4814 10.418 14.1224 8.81018 14.1224 7.06118C14.1224 3.16124 10.9611 0 7.06118 0C3.16124 0 0 3.16124 0 7.06118C0 10.9611 3.16124 14.1224 7.06118 14.1224C8.81018 14.1224 10.418 13.4814 11.6564 12.4168L11.9497 12.721V13.5792L17.3814 19L19 17.3814L13.5792 11.9497ZM7.06118 11.9497C4.3562 11.9497 2.17267 9.76615 2.17267 7.06118C2.17267 4.3562 4.3562 2.17267 7.06118 2.17267C9.76615 2.17267 11.9497 4.3562 11.9497 7.06118C11.9497 9.76615 9.76615 11.9497 7.06118 11.9497Z"
						fill="#C4C4C4"
					/>
				</svg>
			);
			break;
		case 'rocket':
			result = (
				<svg
					width={size[0]}
					height={size[1]}
					viewBox="0 0 14 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14 16L10.6225 14.76C11.235 13.536 11.6725 12.272 11.9437 10.984L14 16ZM3.3775 14.76L0 16L2.05625 10.984C2.3275 12.272 2.765 13.536 3.3775 14.76ZM7 0C7 0 11.375 1.6 11.375 8C11.375 10.48 10.7188 12.6 9.91375 14.264C9.625 14.84 9.00375 15.2 8.3125 15.2H5.6875C4.99625 15.2 4.375 14.84 4.08625 14.264C3.29 12.6 2.625 10.48 2.625 8C2.625 1.6 7 0 7 0ZM7 8C7.9625 8 8.75 7.28 8.75 6.4C8.75 5.52 7.9625 4.8 7 4.8C6.0375 4.8 5.25 5.52 5.25 6.4C5.25 7.28 6.0375 8 7 8Z"
						fill="#CC6633"
					/>
				</svg>
			);
			break;
		default:
			result = null;
	}
	return <>{result}</>;
};
