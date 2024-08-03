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
