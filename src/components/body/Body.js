
import AboutMe from "./bodyparts/AboutMe";
import "./Body.css";
import EduAndSkills from "./bodyparts/EduAndSkills";
import WorkExp from "./bodyparts/WorkExp";
import ExtraCurricular from "./bodyparts/ExtraCurricular";

const Body = () => {
  return (
    <div className="body-container">
      <AboutMe />
      <EduAndSkills />
      <WorkExp />
      <ExtraCurricular/>
    </div>
  );
}

export default Body;
