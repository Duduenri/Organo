import './Collaborator.css'

const Collaborator = ({name, img, role }) => {
    return (<div className='collaborator'>
        <div className='cabecalho'>
            <img src={img} alt={name} />
        </div>
        <div className='rodape'>
            <h4>{name}</h4>
            <h5>{role}</h5>
        </div>
    </div>)
}

export default Collaborator