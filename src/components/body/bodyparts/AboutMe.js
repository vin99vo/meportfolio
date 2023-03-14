import "./AboutMe.css";
import Card from "../../general/Card";
import Icon from "../../general/Icon";
import frisbeeLogo from "../../../thumbnails/icons/frisbeeLogo.png";
import PcLogo from "../../../thumbnails/icons/pcLogo.jpg"

const AboutMe = (props) => {
  return (
    <div className="aboutme">
      <Card>
        <div className="title-container">
        <Icon className="PcLogo" imgUrl={PcLogo} alt="PcLogo" />
          <h2>About me</h2>
          <Icon className="fris" imgUrl={frisbeeLogo} alt="frisbeeLogo" />
        </div>

        <p>&#x2022; Junior Web Developer</p>
        <p>&#x2022; Fast and Enthusiastic Learner</p>
        <p>&#x2022; Melbourne, Australia</p>
      </Card>
    </div>
  );
};

export default AboutMe;
