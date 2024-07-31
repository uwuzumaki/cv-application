import { useState } from "react";
import "../Styles/App.css";
import Education from "./Education";
import Person from "./Person";
import Work from "./Work";

const App = () => {
  const [person, setPerson] = useState({});

  const handlePersonChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setPerson((prevPerson) => ({ ...prevPerson, [key]: value }));
  };

  const [schools, setSchools] = useState([]);
  const [degree, setDegree] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [years, setYears] = useState("");

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleYearsChange = (e) => {
    setYears(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchool = {
      degree,
      schoolName,
      years,
    };
    setSchools((prevSchools) => [...prevSchools, newSchool]);
    console.log(schools);
  };

  return (
    <>
      <h1>Hello World</h1>
      <Person person={person} handleChange={handlePersonChange} />
      <Education
        degree={degree}
        schoolName={schoolName}
        years={years}
        handleDegreeChange={handleDegreeChange}
        handleNameChange={handleNameChange}
        handleYearsChange={handleYearsChange}
        handleSubmit={handleSubmit}
      />
      <Work />
    </>
  );
};

export default App;
