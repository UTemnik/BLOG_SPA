import React from 'react';
import Dropdown from './../../../../../common/Dropdown/Dropdown';
import DropdownMenu from './DropdownMenu/DropdowmMenu';
import FunctionalPanel from './FunctionalPanel/FunctionalPanel';
import s from './menu.less';

const Menu = () => {
	return (
		<div className={s.menu}>
			<div className={s.options}>
				<Dropdown
					isOpen={false}
					button={
						<button className={s.menuButton}>
							<svg
								width="5"
								height="20"
								viewBox="0 0 5 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
								<circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
								<circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
							</svg>
						</button>
					}
				>
					<DropdownMenu />
				</Dropdown>
			</div>
			<div className={s.statistics}>
				<button>
					<svg
						className={s.upCounter}
						width="19"
						height="10"
						viewBox="0 0 19 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
					</svg>
				</button>

				<span className={s.appraisal}>325</span>
				<button>
					<svg
						className={s.downCounter}
						width="19"
						height="10"
						viewBox="0 0 19 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9" />
					</svg>
				</button>
			</div>

			<FunctionalPanel />
		</div>
	);
};

export default Menu;
