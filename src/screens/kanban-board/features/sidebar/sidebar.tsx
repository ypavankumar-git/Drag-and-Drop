import React from 'react';
import ProjectTitle from './projectTitle';
import Menus from './menus';
import clsx from 'clsx';

type Props = {
  sideBarToggle: boolean;
  onClickCallBack: () => void;
};

const SideBar = ({ sideBarToggle = false, onClickCallBack }: Props) => {
  return (
    <div
      className={clsx(
        'flex absolute h-screen w-[50%] sm:max-w-[200px] flex-col p-4 border-solid border-r border-gray-200',
        sideBarToggle ? '' : '-left-[175px]'
      )}
    >
      <ProjectTitle className="my-4 mb-6" />
      <div
        className="flex justify-center items-center absolute w-5 h-5 top-10 -right-2.5 border-solid border border-gray-300 rounded-full bg-white"
        onClick={onClickCallBack}
      >
        <i
          className={clsx(
            'fa fa-xs fa-solid text-gray-600',
            sideBarToggle ? 'fa-chevron-left' : 'fa-chevron-right'
          )}
        />
      </div>
      <Menus />
    </div>
  );
};

export default SideBar;
