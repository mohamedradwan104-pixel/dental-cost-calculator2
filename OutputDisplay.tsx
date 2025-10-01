import React from 'react';
import InfoTooltip from './InfoTooltip';

interface OutputDisplayProps {
  label: string;
  value: string;
  tooltip?: string;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ label, value, tooltip }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center text-center">
      <div className="flex items-center text-sm font-medium text-gray-500 mb-1">
        <span>{label}</span>
        {tooltip && <span className="ml-2"><InfoTooltip text={tooltip} /></span>}
      </div>
      <p className="text-2xl font-semibold text-teal-600">{value}</p>
    </div>
  );
};

export default OutputDisplay;
