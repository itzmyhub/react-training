function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Usuário Cadastrado")
    }

    return (
        <div>
            <h1>Meu Formulário:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Seu nome..."/>
                </div>
                <div>
                    <input type="submit" placeholder="Confirmar"/>
                </div>
            </form>
        </div>
    )
}

export default Form