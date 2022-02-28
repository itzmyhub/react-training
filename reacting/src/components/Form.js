import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log("Usuário Cadastrado")
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Formulário:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Seu nome..." onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Sua senha..." onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" placeholder="Confirmar"/>
                </div>
            </form>
        </div>
    )
}

export default Form