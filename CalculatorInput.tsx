import React from 'react';
import InfoTooltip from './InfoTooltip';

interface CalculatorInputProps {
  label: string;
  id: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit?: string;
  tooltip?: string;
  step?: number;
}

const CalculatorInput: React.FC<CalculatorInputProps> = ({ label, id, value, onChange, unit, tooltip, step = 0.01 }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="flex items-center text-sm font-medium text-gray-700 mb-1">
        {label}
        {tooltip && <span className="ml-2"><InfoTooltip text={tooltip} /></span>}
      </label>
      <div className="relative">
        <input
          type="number"
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          min="0"
          step={step}
          className="w-full pl-3 pr-12 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
        />
        {unit && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{unit}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorInput;
