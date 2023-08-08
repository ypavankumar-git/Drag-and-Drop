import React from 'react';
import PresidioIcon from '../../../../assets/Presidio.jpeg';
import { twMerge } from 'tailwind-merge';

type Props = {
  className: string;
};
const ProjectTitle = (props: Props) => {
  return (
    <div className={twMerge('flex flex-row', props.className)}>
      <div className="flex w-8 p-1 items-center justify-center mr-2">
        <img src={PresidioIcon} alt="P" />
      </div>
      <div className="flex flex-col">
        <span className="text-base font-medium">PRESIDIO</span>
        <span className="text-xs font-light text-gray-500">Software Project</span>
      </div>
    </div>
  );
};

export default ProjectTitle;
