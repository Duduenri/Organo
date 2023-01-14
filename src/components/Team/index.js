import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    const css = {backgroundColor: props.secundaryColor}

    return (
        <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='collaborators'>
            {props.collaborators.map( collaborator => <Collaborator name={collaborator.name} role={collaborator.role} img={collaborator.img}/> )}
            </div>
        </section>
    )
}

export default Team