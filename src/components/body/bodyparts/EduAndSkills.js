import Card from "../../general/Card";
import "./EduAndSkills.css";
import Icon from "../../general/Icon";
import ReactJSLogo from "../../../thumbnails/icons/ReactJSLogo.png";
import CSS3Logo from "../../../thumbnails/icons/CSS3Logo.png";
import HTML5Logo from "../../../thumbnails/icons/HTML5Logo.png";
import JavaScriptLogo from "../../../thumbnails/icons/JavaScriptLogo.png";
import ReduxLogo from "../../../thumbnails/icons/ReduxLogo.png";
import TypeScriptLogo from "../../../thumbnails/icons/TypeScriptLogo.png";
import RStudioLogo from "../../../thumbnails/icons/RStudioLogo.png";
import SQLLogo from "../../../thumbnails/icons/SQLLogo.png";
import JavaLogo from "../../../thumbnails/icons/javaLogo.png";
import Content from "../../general/Content";

const EduAndSkills = () => {
  const contents = [
    {
      // title: '',
      // date:'',
      // role: '',
      description: [
        "• University of Melbourne, Bachelor of Commerce (Actuarial Sciences 2022 Graduate)",
      ],
    },
  ];
  const skills = [
    { imgUrl: ReactJSLogo, alt: "ReactJS", logo: "ReactJS" },
    { imgUrl: HTML5Logo, alt: "HTML5", logo: "HTML5" },
    { imgUrl: CSS3Logo, alt: "CSS3", logo: "CSS3" },
    { imgUrl: JavaScriptLogo, alt: "JavaScript", logo: "JavaScript" },
    { imgUrl: ReduxLogo, alt: "Redux", logo: "Redux" },
    { imgUrl: TypeScriptLogo, alt: "TypeScript", logo: "TypeScript" },
    { imgUrl: RStudioLogo, alt: "RStudio", logo: "RStudio" },
    { imgUrl: SQLLogo, alt: "SQL", logo: "SQL" },
    { imgUrl: JavaLogo, alt: "Java", logo: "Java" },
  ];
  const contentList = contents.map((x) => <Content object={x} />);
  return (
    <div className="eduandskills">
      <Card>
        <h2 className="education">Education</h2>
        {contentList}
        <div className="skills-container">
          <h2>Skills</h2>
          <div className="skill-icons">
            {skills.map((skill) => (
              <Icon classes="skillIcon" imgUrl={skill.imgUrl} alt={skill.alt} logo={skill.logo} />
            ))}
          </div>

          {/* <div className="skill-icons">
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
            <Icon imgUrl={JavaLogo} alt="Java" logo="Java" />
          </div> */}
        </div>
      </Card>
    </div>
  );
};

export default EduAndSkills;
