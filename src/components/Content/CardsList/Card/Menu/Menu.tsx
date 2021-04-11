import React from 'react';
import {Dropdown} from './../../../../../common/Dropdown/Dropdown';
import DropdownMenu from './DropdownMenu/DropdowmMenu';
import FunctionalPanel from './FunctionalPanel/FunctionalPanel';
import s from './menu.less';
import { EIcons, Icon } from '../../../../../common/Icons/Icon';
import { Rating } from './Rating/Rating';

interface IMenu {
  rating: number;
}

const Menu = ({ rating }: IMenu) => {
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
      <Rating rating={rating} />
      <FunctionalPanel />
    </div>
  );
};

export default Menu;
