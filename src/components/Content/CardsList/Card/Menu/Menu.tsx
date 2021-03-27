import React from 'react';
import MenuIcon from './../../../../../Icons/MenuIcon';
import UpIcon from './../../../../../Icons/UpIcon';
import Dropdown from './../../../../../common/Dropdown/Dropdown';
import DropdownMenu from './DropdownMenu/DropdowmMenu';
import FunctionalPanel from './FunctionalPanel/FunctionalPanel';
import s from './menu.less';
import DownIcon from './../../../../../Icons/DownIcon';

const Menu = () => {
	return (
		<div className={s.menu}>
			<div className={s.options}>
				<Dropdown
					isOpen={false}
					button={
						<button className={s.menuButton}>
							<MenuIcon />
						</button>
					}
				>
					<DropdownMenu />
				</Dropdown>
			</div>
			<div className={s.statistics}>
				<button>
					<UpIcon />
				</button>

				<span className={s.appraisal}>325</span>
				<button>
					<DownIcon />
				</button>
			</div>

			<FunctionalPanel />
		</div>
	);
};

export default Menu;
