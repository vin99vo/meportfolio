import './Content.css';

const Content = (props) => {
    return(
        <div>
            <h2>{props.object.title}</h2>
            <h3>{props.object.date}</h3>
            <h4>{props.object.role}</h4>
            <div>
                () => {props.object.description.map()}
            </div>
        </div>
    )
}

export default Content;