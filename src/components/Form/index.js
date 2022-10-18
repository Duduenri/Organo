import Textfield from '../Textfield'
import './form.css'

const Form = () => {
    return(
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Textfieldeld label="Nome" placeholder="Digite seu nome" />
                <Textfield label="Cargo" placeholder="Digite seu cargo" />
                <Textfield label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Form