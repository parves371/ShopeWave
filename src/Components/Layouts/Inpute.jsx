import React from "react";

const Inpute = ({
  className,
  label,
  type,
  placeholder,
  value,
  onchange,
  name,
  error
}) => {
  return (
    <div className={`font-dm ${className}`}>
      <label className="text-base text-[#262626] font-bold block">
        {label}
      </label>
      <input
        type={type}
        className="outline-transparent py-5 w-full border-b border-[#F0F0F0] placeholder:text-base placeholder:text-[#767676]"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        name={name}
      />
      <p className="text-base font-bold text-red-700">{error}</p>
    </div>
  );
};

export default Inpute;
