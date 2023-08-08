import React from 'react';
import SideBar from './features/sidebar/sidebar';
import Board from './features/board/board';
import useToggle from '../../hooks/useToggle';

const KanbanBoard = () => {
  const [sideBarToggle, setSideBarToggle] = useToggle(true);
  return (
    <div className="flex flex-row">
      <SideBar sideBarToggle={sideBarToggle} onClickCallBack={setSideBarToggle} />
      <Board sideBarToggle={sideBarToggle} />
    </div>
  );
};

export default KanbanBoard;
