import Button from "./evento/Button"

function Evento({numero}) {

    function meuEvento() {
        console.log(`deu certo, mané... ${numero}`)
    }

    function segundoEvento() {
        console.log('Mais um evento e pá')
    }

    return (
        <div>
            <p>Clique aqui:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento