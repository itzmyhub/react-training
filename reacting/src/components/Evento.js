function Evento({numero}) {

    function meuEvento() {
        console.log(`deu certo, mané... ${numero}`)
    }

    return (
        <div>
            <p>Clique aqui:</p>
            <button onClick={meuEvento}>CLICA!</button>
        </div>
    )
}

export default Evento