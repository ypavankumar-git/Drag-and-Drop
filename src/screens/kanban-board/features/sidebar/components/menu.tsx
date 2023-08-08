import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

type Props = {
  iconClassName?: string;
  menuLabel: string;
};
const MenuItem = (props: Props) => {
  return (
    <div className="align-center flex flex-row rounded-md py-3 hover:bg-gray-100">
      <div className="mx-2 flex w-8 items-center justify-center">
        <i className={`fa ${props.iconClassName} text-gray-600`} />
      </div>
      <div className="">
        <span className="text-base font-normal text-gray-500">{props.menuLabel}</span>
      </div>
    </div>
  );
};

export default MenuItem;
