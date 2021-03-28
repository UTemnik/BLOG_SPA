import React from 'react';
import MenuIcon from './../../../../../Icons/MenuIcon';
import Dropdown from './../../../../../common/Dropdown/Dropdown';
import DropdownMenu from './DropdownMenu/DropdowmMenu';
import FunctionalPanel from './FunctionalPanel/FunctionalPanel';
import s from './menu.less';
import { EIcons, Icon } from './../../../../../Icons/Icon';

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
					<Icon name={EIcons.up} sizeW={19} sizeH={10} className={s.upCounter} />
				</button>

				<span className={s.appraisal}>325</span>
				<button>
				<Icon name={EIcons.down} sizeW={19} sizeH={10} className={s.downCounter} />
				</button>
			</div>

			<FunctionalPanel />
		</div>
	);
};

export default Menu;
