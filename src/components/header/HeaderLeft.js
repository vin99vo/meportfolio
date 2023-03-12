import Icon from '../general/Icon';
import './HeaderLeft.css';
import frisbeeLogo from '../../thumbnails/frisbeeLogo.png';

const HeaderLeft = () => {
  return (
    <div className="header-left">
      <h2>Vincent Vo</h2>      
      <Icon className ='fris' imgUrl={frisbeeLogo} alt='frisbeeLogo'/>
    </div>
  );
};

export default HeaderLeft;

