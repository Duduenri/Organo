import Button from '../Button'
import DropDown from '../DropDown'
import Textfield from '../Textfield'
import './Form.css'
import { useState } from 'react'

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

const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')

    const saving = (evento) => {
        evento.preventDefault() 
        
    }

    return (
        <section className='form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Textfield 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome" 
                valor = {nome}
                aoAlterado = {valor => setNome(valor)}
                />
                <Textfield 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                valor = {cargo}
                aoAlterado = {valor => setCargo(valor)}
                />
                <Textfield 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}
                />
                <DropDown 
                obrigatorio={true} 
                label="Time" 
                itens={times}
                valor={time}
                aoAlterado = {valor => setTime(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form