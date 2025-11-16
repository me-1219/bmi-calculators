import React from 'react';

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  unit,
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
          {label}
          {unit && <span className="text-gray-500 ml-1">({unit})</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-4 rounded-xl bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 backdrop-blur-sm"
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;