import './Myform.css'
import { useState } from 'react'

const Myform = ({user}) => {
    // 6- controlled input
    // 3 - gerenciamento de dados 
    const [name,setName] = useState(user ? user.name : '')
    const [email,setEmail] = useState(user ? user.email : '')

    const [bio,setBio] = useState(user ? user.bio : '')
    const[role,setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    // console.log(name)
    // console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('ENVIANDO O FORMULÁRIO')
        console.log(name,email,bio)
        // validação
        // envio
        setName("")
        setEmail("")
        setBio("")
    }

    return (
        <>
        {/* envio de formulario */}
        {/* 1 - criando form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome :</label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name}/>
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* simplificacao de manipulacao de state */}
                <input type="email" name="email" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* 8 - text area */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Função no Sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
        </>
    )
}

export default Myform
