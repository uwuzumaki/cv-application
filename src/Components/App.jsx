import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
  const [editSchoolID, setEditSchoolID] = useState("");

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
    if (editSchoolID == "") {
      const newSchool = {
        id: uuidv4(),
        degree,
        schoolName,
        years,
      };
      setSchools((prevSchools) => [...prevSchools, newSchool]);
    }
    if (editSchoolID != "") {
      const oldSchool = {
        id: editSchoolID,
        degree,
        schoolName,
        years,
      };
      setSchools((prevSchools) =>
        prevSchools.map((school) =>
          oldSchool.id === school.id ? oldSchool : school
        )
      );
    }
    setDegree("");
    setSchoolName("");
    setYears("");
    setEditSchoolID("");
  };

  const [jobs, setJobs] = useState([]);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [dates, setDates] = useState("");
  const [editJobID, setEditJobID] = useState("");

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
    if (editJobID == "") {
      const newJob = {
        id: uuidv4(),
        position,
        company,
        dates,
      };
      setJobs((prevJobs) => [...prevJobs, newJob]);
    }
    if (editJobID != "") {
      const oldJob = {
        id: editJobID,
        position,
        company,
        dates,
      };
      setJobs((prevJobs) =>
        prevJobs.map((job) => (oldJob.id === job.id ? oldJob : job))
      );
    }
    setPosition("");
    setCompany("");
    setDates("");
    setEditJobID("");
  };

  const editC = (section, e) => {
    const sectionID = e.target.parentNode.id;
    if (section == "school") {
      const card = schools.filter((school) => school.id == sectionID);
      setDegree(card[0].degree);
      setSchoolName(card[0].schoolName);
      setYears(card[0].years);
      setEditSchoolID(card[0].id);
    }
    if (section == "work") {
      const card = jobs.filter((school) => school.id == sectionID);
      setPosition(card[0].position);
      setCompany(card[0].company);
      setDates(card[0].dates);
      setEditJobID(card[0].id);
    }
  };

  const deleteC = (section, e) => {
    if (section == "school") {
      setSchools((prevData) =>
        prevData.filter((data) => data.id != e.target.parentNode.id)
      );
    }
    if (section == "work") {
      setJobs((prevData) =>
        prevData.filter((data) => data.id != e.target.parentNode.id)
      );
    }
  };

  return (
    <>
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
      <div id="displayP">
        <div id="personList">
          <div>
            {" "}
            {person.first} {person.last}
          </div>
          <div>
            {person.city} {person.state} {person.postalcode}
          </div>
          <div>
            {person.phone} {person.email}
          </div>
        </div>
        <div id="schoolList">
          <span>Education</span>
          {schools.map((school) => (
            <>
              <li key={school.id} id={school.id} data-section="school">
                <span>{school.degree}</span>
                <br />
                <span>{school.schoolName}</span>
                <br />
                <span>{school.years}</span>
                <br />
                <button onClick={(e) => editC("school", e)}>Edit</button>
                <button onClick={(e) => deleteC("school", e)}>Delete</button>
              </li>
            </>
          ))}
        </div>
        <div id="workList">
          <span>Work Experience</span>
          {jobs.map((job) => (
            <>
              <li key={job.id} id={job.id} data-section="work">
                <span>{job.position}</span>
                <br /> <span>{job.company}</span>
                <br /> <span>{job.dates}</span>
                <br />
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
