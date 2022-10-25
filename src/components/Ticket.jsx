import styled from "styled-components"

const StyleTicket = styled.div `
    padding: 20px;
    width: 400px;
    height: 200px;
    margin: 20px;
    border: 2px solid #ff009d;
    border-radius: 20px;

    h2 {
        width: 70%;
        margin: auto;
        margin-bottom: 20px;
        color: #00eeff;
        text-align: center;
    }

    p {
        text-align: center;
        margin: 20px;
    }

    button {
        color: #ff009d;
        border: 2px solid #ff009d;
        border-radius: 20px;
        background-color: #121212;
        padding: 5px;
        display: block;
        width: 30%;
        margin: 20px auto;
        transition: 250ms;
    }

    button:hover {
        cursor: pointer;
        color: #121212;
        border: 2px solid #121212;
        background-color: #ff009d;
        box-shadow: 0 0 10px #ff009d;
        transition: 250ms;
    }
`

function Ticket(props) {
    return(
        <>
            <StyleTicket>
                <h2>{props.pedido}</h2>
                <p>Tel.: {props.tel}</p>
                <p>Valor: {props.valor}</p>
                <button onClick={props.remove}>Deletar</button>
            </StyleTicket>
        </>
    )
}

export default Ticket