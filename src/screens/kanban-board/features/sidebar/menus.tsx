import React from 'react';
import MenuItem from './components/menu';
import { menuItems } from './data/menuItem';

export const Menus = () => {
  return (
    <div className="flex flex-col w-11/12">
      {menuItems.map((menuItem: any) => (
        <MenuItem
          key={menuItem.label}
          menuLabel={menuItem.label}
          iconClassName={menuItem.iconClass}
        />
      ))}
    </div>
  );
};

export default Menus;
