/* eslint-disable react/prop-types */
import "../Styles/Person.css";
import { Input } from "./HelperComp";

const Person = ({ person, handleChange }) => {
  return (
    <form id="person">
      <Input
        label="First Name:"
        name="first"
        value={person.first}
        onChange={handleChange}
      />
      <Input
        label="Last Name:"
        name="last"
        value={person.last}
        onChange={handleChange}
      />
      <Input
        label="City:"
        name="city"
        value={person.city}
        onChange={handleChange}
      />
      <Input
        label="State:"
        name="state"
        value={person.state}
        onChange={handleChange}
      />
      <Input
        label="Postal Code:"
        name="postalcode"
        value={person.postalcode}
        onChange={handleChange}
      />
      <Input
        label="Phone Number"
        name="phone"
        value={person.phone}
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        onChange={handleChange}
      />
      <Input
        label="Email:"
        name="email"
        value={person.email}
        onChange={handleChange}
      />
    </form>
  );
};

export default Person;
