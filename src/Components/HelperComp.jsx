/* eslint-disable react/prop-types */

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input name={name} value={value} onChange={onChange}></input>
    </div>
  );
}

export { Input };
