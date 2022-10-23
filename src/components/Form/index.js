import Button from '../Button'
import DropDown from '../DropDown'
import Textfield from '../Textfield'
import './Form.css'

const Form = () => {

    const times = [
        'Programação', 
        'Front-End', 
        'Data Science', 
        'Devops', 
        'UX e Design', 
        'Mobile', 
        'Inovação e Gestão'
    ]

    const saving = (evento) => {
        evento.preventDefault() 
        
    }

    return (
        <section className='form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Textfield obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <Textfield obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <Textfield label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDown obrigatorio={true} label="Time" itens={times}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form