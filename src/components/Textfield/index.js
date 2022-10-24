import './Textfield.css'

const Textfield = (props) => {
    let valor = ''

    const aoDigitado = (evento) => {
        valor = evento.targent.value
        console.log(valor) 
    }

    return(
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.orbigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default Textfield