import './HeaderLeft.css'

const HeaderLeft = (props) => {
  return (
    <div className="header-left">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>Melbourne, Australia</p>
    </div>
  );
};

export default HeaderLeft;
