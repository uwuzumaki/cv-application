import { useState } from "react";
import "../Styles/Education.css";
import { Input } from "./Helper";

const Education = () => {
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
    <form id="education">
      <Input
        label="degree"
        name="degree"
        value={degree}
        onChange={handleDegreeChange}
      />
      <Input
        label="School Name"
        name="schoolName"
        value={schoolName}
        onChange={handleNameChange}
      />
      <Input
        label="years"
        name="years"
        value={years}
        onChange={handleYearsChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Go2!
      </button>
    </form>
  );
};

export default Education;
