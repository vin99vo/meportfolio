import "./Content.css";
import Description from "./Description";

const Content = ({ object }) => {
  const descript = object.description;

  const descriptList = descript.map((desc) => (
    <Description description={desc} />
  ));

  return object.title ? (
    <div className="contentbody">
      <h3>{object.title}</h3>
      <h4>{object.date}</h4>
      <h5>{object.role}</h5>
      <p>{descriptList}</p>
    </div>
  ) : (
    <div className="contentbody">
      <p>{descriptList}</p>
    </div>
  );
};

export default Content;
