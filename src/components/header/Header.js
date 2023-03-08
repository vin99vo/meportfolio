import "./Header.css";
import linkedin from '../../icons/linkedin.png';

function Header({ title, image, content }) {
  return (
    <div className="header">
      <div className="header-left">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="header-right">
        <a className="linkedin-button" href = "https://www.linkedin.com/in/vincent-v-a59822124/" target="_blank">
          <img class="linkedin-icon" src={linkedin} alt="linkedin"/>
        </a>
      </div>
    </div>
  );
}

export default Header;
