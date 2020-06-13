import React from "react";
const Input = ({ type, name, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
