function TestandoSL ({setNome}) {

    return (
        <div>
            <p>Mano então dessa vez tu só escreve ai blz?</p>
            <input type="text" placeholder="Esperando tu escrever mah" onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}

export default TestandoSL