import './Buttons.css'

const Buttons = (props) => {
    return (
        <button className={props.class}>{props.text}</button>
    )
}

export default Buttons