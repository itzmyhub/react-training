import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="celta" ano_lancamento={2005}/>
                <Item marca="camaro" ano_lancamento={1999}/>
                <Item marca="carro do ano"/>
                <Item />
            </ul>
        </>
    )
}

export default List