import { useState } from "react";
import "../Styles/App.css";
import Education from "./Education";
import Person from "./Person";
import Work from "./Work";

const App = () => {
  const [person, setPerson] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setPerson((prevPerson) => ({ ...prevPerson, [key]: value }));
  };

  return (
    <>
      <h1>Hello World</h1>
      <Person person={person} handleChange={handleChange} />
      <Education />
      <Work />
    </>
  );
};

export default App;
