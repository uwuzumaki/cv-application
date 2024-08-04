/* eslint-disable react/prop-types */
import "../Styles/Person.css";
import { Input } from "./HelperComp";

const Person = ({ person, handleChange }) => {
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
    </form>
  );
};

export default Person;
