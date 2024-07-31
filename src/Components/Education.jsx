/* eslint-disable react/prop-types */
import "../Styles/Education.css";
import { Input } from "./Helper";

const Education = ({
  degree,
  schoolName,
  years,
  handleDegreeChange,
  handleNameChange,
  handleYearsChange,
  handleSubmit,
}) => {
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
