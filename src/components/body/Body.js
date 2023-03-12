
import AboutMe from "./bodyparts/AboutMe";
import "./Body.css";
import EduAndSkills from "./bodyparts/EduAndSkills";
import WorkExp from "./bodyparts/WorkExp";
import ExtraCurricular from "./bodyparts/ExtraCurricular";
import Tabs from "./Tabs";

const Body = () => {
  return (
    <div className="body-container">
      <AboutMe />
      <Tabs />
    </div>
  );
}

export default Body;
