import Card from "../general/Card";
import "./EduAndSkills.css";
import Icon from "../general/Icon";
import ReactJSLogo from "../../thumbnails/ReactJSLogo.png";
import CSS3Logo from "../../thumbnails/CSS3Logo.png";
import HTML5Logo from "../../thumbnails/HTML5Logo.png";
import JavaScriptLogo from "../../thumbnails/JavaScriptLogo.png";
import ReduxLogo from "../../thumbnails/ReduxLogo.png";
import TypeScriptLogo from "../../thumbnails/TypeScriptLogo.png";
import RStudioLogo from "../../thumbnails/RStudioLogo.png";
import SQLLogo from "../../thumbnails/SQLLogo.png";

const EduAndSkills = () => {
  return (
    <div className="eduandskills">
      <Card>
        <div>
          <h2>Education</h2>
          <p>
            &#x2022; University of Melbourne&#x3a; Bachelor of Commerce &#8211;
            Actuarial Sciences 2022 Graduate
          </p>
        </div>
        {/* react html css
          javascript redux typescript
          sql r */}
        <div>
          <h2>Skills</h2>
          <div className="skill-icons">
            <Icon imgUrl={ReactJSLogo} alt="ReactJS" logo="ReactJS" />
            <Icon imgUrl={HTML5Logo} alt="HTML5" logo="HTML5" />
            <Icon imgUrl={CSS3Logo} alt="CSS3" logo="CSS3" />
          </div>
          <div className="skill-icons">
            <Icon imgUrl={JavaScriptLogo} alt="JavaScript" logo="JavaScript" />
            <Icon imgUrl={ReduxLogo} alt="Redux" logo="Redux" />
            <Icon imgUrl={TypeScriptLogo} alt="TypeScript" logo="TypeScript" />
          </div>
          <div className="skill-icons">
            <Icon imgUrl={RStudioLogo} alt="RStudio" logo="RStudio" />
            <Icon imgUrl={SQLLogo} alt="SQL" logo="SQL" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EduAndSkills;
