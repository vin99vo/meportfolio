
import AboutMe from "./AboutMe";
import "./Body.css";
import EduAndSkills from "./EduAndSkills";

function Body({ content }) {
  return (
    <div className="body-container">
      <AboutMe />
      <EduAndSkills />
    </div>
  );
}

export default Body;
