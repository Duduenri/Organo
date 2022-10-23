import './Textfield.css'

const Textfield = (props) => {
    return(
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input required={props.orbigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default Textfield