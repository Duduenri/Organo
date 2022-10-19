import DropDown from '../DropDown'
import Textfield from '../Textfield'
import './Form.css'
import './form.css' //bug with github

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

    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Textfield label="Nome" placeholder="Digite seu nome" />
                <Textfield label="Cargo" placeholder="Digite seu cargo" />
                <Textfield label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDown label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Form