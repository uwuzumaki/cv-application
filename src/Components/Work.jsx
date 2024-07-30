import { useState } from "react";
import "../Styles/Work.css";
import { Input } from "./Helper";

const Work = () => {
  const [jobs, setJobs] = useState([]);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [dates, setDates] = useState(""); //Could probably have start/end date

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleDatesChange = (e) => {
    setDates(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      position,
      company,
      dates,
    };
    setJobs((prevJobs) => [...prevJobs, newJob]);
    console.log(jobs);
  };

  return (
    <form id="work">
      <Input
        label="position"
        name="position"
        value={position}
        onChange={handlePositionChange}
      />
      <Input
        label="company"
        name="company"
        value={company}
        onChange={handleCompanyChange}
      />
      <Input
        label="dates"
        name="dates"
        value={dates}
        onChange={handleDatesChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Go3!
      </button>
    </form>
  );
};

export default Work;
