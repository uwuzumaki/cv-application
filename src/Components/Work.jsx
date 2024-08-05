/* eslint-disable react/prop-types */
import "../Styles/Work.css";
import { Input } from "./HelperComp";

const Work = ({
  position,
  company,
  dates,
  handlePositionChange,
  handleCompanyChange,
  handleDatesChange,
  handleSubmit,
}) => {
  return (
    <form id="work">
      <Input
        label="Position:"
        name="position"
        value={position}
        onChange={handlePositionChange}
      />
      <Input
        label="Company:"
        name="company"
        value={company}
        onChange={handleCompanyChange}
      />
      <Input
        label="Dates:"
        name="dates"
        value={dates}
        onChange={handleDatesChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default Work;
