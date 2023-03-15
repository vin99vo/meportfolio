import "./AboutMe.css";
import Card from "../../general/Card";
import Icon from "../../general/Icon";
import frisbeeLogo from "../../../thumbnails/icons/frisbeeLogo.png";
import PcLogo from "../../../thumbnails/icons/pcLogo.jpg";

const AboutMe = () => {
  const about = [
    "Junior Web Developer",
    "Fast and Enthusiastic Learner",
    "Melbourne, Australia",
  ];

  return (
    <div className="aboutme">
      <Card>
        <div className="title-container">
          <Icon className="PcLogo" imgUrl={PcLogo} alt="PcLogo" />
          <h2>About me</h2>
          <Icon className="fris" imgUrl={frisbeeLogo} alt="frisbeeLogo" />
        </div>
        {about.map((aboutme) => (
          <p>&#x2022; {aboutme}</p>
        ))}
      </Card>
    </div>
  );
};

export default AboutMe;
