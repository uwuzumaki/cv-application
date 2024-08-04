import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../Styles/App.css";
import Education from "./Education";
import Person from "./Person";
import Work from "./Work";
// import { deleteCard } from "./HelperFunc";

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
      id: uuidv4(),
      degree,
      schoolName,
      years,
    };
    setSchools((prevSchools) => [...prevSchools, newSchool]);
    setDegree("");
    setSchoolName("");
    setYears("");
    console.log(schools);
  };

  const [jobs, setJobs] = useState([]);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [dates, setDates] = useState("");

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleDatesChange = (e) => {
    setDates(e.target.value);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const newJob = {
      id: uuidv4(),
      position,
      company,
      dates,
    };
    setJobs((prevJobs) => [...prevJobs, newJob]);
    setPosition("");
    setCompany("");
    setDates("");
    console.log(jobs);
  };

  const editC = (section, e) => {
    const sectionID = e.target.parentNode.id;
    if (section == "school") {
      const card = schools.filter((school) => school.id == sectionID);
      setDegree(card[0].degree);
      setSchoolName(card[0].schoolName);
      setYears(card[0].years);
    }
    if (section == "work") {
      const card = jobs.filter((school) => school.id == sectionID);
      setPosition(card[0].position);
      setCompany(card[0].company);
      setDates(card[0].dates);
    }
  };

  const deleteC = (e) => {
    const card = e.target.parentNode.dataset.section;
    if (card == "school") {
      setSchools((prevData) =>
        prevData.filter((data) => data.id != e.target.parentNode.id)
      );
    }
    if (card == "work") {
      setJobs((prevData) =>
        prevData.filter((data) => data.id != e.target.parentNode.id)
      );
    }
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
      <Work
        jobs={jobs}
        position={position}
        company={company}
        dates={dates}
        handlePositionChange={handlePositionChange}
        handleCompanyChange={handleCompanyChange}
        handleDatesChange={handleDatesChange}
        handleSubmit={handleSubmit2}
      />
      <div>
        <div>
          Person: {person.first} {person.last} {person.phone} {person.email}{" "}
          {person.city} {person.state} {person.postalcode}
        </div>
        <div id="schoolList">
          Education:{" "}
          {schools.map((school) => (
            <>
              <li key={school.id} id={school.id} data-section="school">
                {school.degree} {school.schoolName} {school.years}
                <button onClick={(e) => editC("school", e)}>Edit</button>
                <button onClick={deleteC}>Delete</button>
              </li>
            </>
          ))}
        </div>
        <div id="workList">
          Work experience:{" "}
          {jobs.map((job) => (
            <>
              <li key={job.id} id={job.id} data-section="work">
                {job.position} {job.company} {job.dates}
                <button onClick={(e) => editC("work", e)}>Edit</button>
                <button onClick={deleteC}>Delete</button>
              </li>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
