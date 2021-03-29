import React from 'react';
import Dropdown from './../../../../../common/Dropdown/Dropdown';
import DropdownMenu from './DropdownMenu/DropdowmMenu';
import FunctionalPanel from './FunctionalPanel/FunctionalPanel';
import s from './menu.less';
import { EIcons, Icon } from '../../../../../common/Icons/Icon';

const Menu = () => {
	return (
		<div className={s.menu}>
			<div className={s.options}>
				<Dropdown
					isOpen={false}
					button={
						<button className={s.menuButton}>
							<Icon name={EIcons.menu} size={[5, 20]} />
						</button>
					}
				>
					<DropdownMenu />
				</Dropdown>
			</div>
			<div className={s.statistics}>
				<button>
					<Icon name={EIcons.up} size={[19, 10]} className={s.upCounter} />
				</button>

				<span className={s.appraisal}>325</span>
				<button>
					<Icon name={EIcons.down} size={[19, 10]} className={s.downCounter} />
				</button>
			</div>

			<FunctionalPanel />
		</div>
	);
};

export default Menu;
