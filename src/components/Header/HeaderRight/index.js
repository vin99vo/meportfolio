import LinkedInLogo from "../../../thumbnails/icons/LinkedInLogo.png";
import Icon from "../../general/Icon";
import "./HeaderRight.css";

const HeaderRight = () => {
  return (
    <div className="header-right">
      <a
        className="linkedin-button"
        href="https://www.linkedin.com/in/vinvo1/"
        target="_blank"
      >
        <Icon className="linkedinLogo" imgUrl={LinkedInLogo} alt="LinkedIn" />
      </a>
    </div>
  );
};

export default HeaderRight;
