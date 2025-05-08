import React from 'react';

export const CSLable = ({ label, name, value, onChange, placeholder = '', className = '' }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        maxLength={1}
        placeholder={placeholder}
        className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white uppercase ${className}`}
      />
    </div>
  );
};

