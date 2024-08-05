/* eslint-disable react/prop-types */
import "../Styles/Education.css";
import { Input } from "./HelperComp";

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
        label="Degree:"
        name="degree"
        value={degree}
        onChange={handleDegreeChange}
      />
      <Input
        label="School Name:"
        name="schoolName"
        value={schoolName}
        onChange={handleNameChange}
      />
      <Input
        label="Years Attended:"
        name="years"
        value={years}
        onChange={handleYearsChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default Education;
