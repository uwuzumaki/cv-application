/* eslint-disable react/prop-types */
import { useState } from "react";
import "../Styles/Person.css";

const Person = () => {
  const [person, setPerson] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setPerson((prevPerson) => ({ ...prevPerson, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <form id="person">
      <Input
        label="first"
        name="first"
        value={person.first}
        onChange={handleChange}
      />
      <Input
        label="last"
        name="last"
        value={person.last}
        onChange={handleChange}
      />
      <Input
        label="phone"
        name="phone"
        value={person.phone}
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        onChange={handleChange}
      />
      <Input
        label="email"
        name="email"
        value={person.email}
        onChange={handleChange}
      />
      <Input
        label="city"
        name="city"
        value={person.city}
        onChange={handleChange}
      />
      <Input
        label="state"
        name="state"
        value={person.state}
        onChange={handleChange}
      />
      <Input
        label="postalcode"
        name="postalcode"
        value={person.postalcode}
        onChange={handleChange}
      />
      <button type="submit" value="Submit" onClick={handleSubmit}>
        Go!
      </button>
    </form>
  );
};

function Input({ label, name, value, onChange }) {
  return (
    <label>
      {label} <input name={name} value={value} onChange={onChange}></input>
    </label>
  );
}

export default Person;
