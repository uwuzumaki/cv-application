/* eslint-disable react/prop-types */

function Input({ label, name, value, onChange }) {
  return (
    <label>
      {label} <input name={name} value={value} onChange={onChange}></input>
    </label>
  );
}

export { Input };
