import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    const css = {backgroundColor: props.secundaryColor}

    return (
        <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor}}>{props.name}</h3>
            <Collaborator />
        </section>
    )
}

export default Team