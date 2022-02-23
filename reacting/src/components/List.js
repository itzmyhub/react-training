import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="celta"/>
                <Item marca="camaro"/>
            </ul>
        </>
    )
}

export default List