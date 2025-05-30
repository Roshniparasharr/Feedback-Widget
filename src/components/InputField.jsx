import React from 'react'

const InputField = ({ label, name, type = "text", value, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-amber-800 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2
      focus:ring-amber-500 focus:border-amber-500"
      placeholder={`Your ${name}`}
    />
  </div>
);

export default InputField
