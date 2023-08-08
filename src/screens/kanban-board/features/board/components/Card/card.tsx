import React from 'react';
import Story from '../../../../../../assets/Story';
import Medium from '../../../../../../assets/Medium';

export type Data = {
  children?: React.ReactNode;
  data: {
    id: number;
    uuid: string;
    title: string;
    epic: string;
    ticket: string;
  };
};
const Card = ({ data }: Data) => {
  return (
    <div className="flex flex-col bg-white p-4 gap-3">
      <span>{data.title}</span>
      <span className="bg-cyan-500 rounded p-1 px-2 font-bold text-xs text-white">{data.epic}</span>
      <div className="flex flex-row">
        <div>
          <Story />
        </div>
        <div>
          <Medium />
        </div>
      </div>
      <span>{data.ticket}</span>
    </div>
  );
};

export default Card;
