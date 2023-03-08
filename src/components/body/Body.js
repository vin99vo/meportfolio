
import './Body.css';

function Body({content}) {
    return(
        <div classname='body-container'>
            <p className='para-container'>{content}</p>
        </div>
    )
}

export default Body;