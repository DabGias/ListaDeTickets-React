import styled from "styled-components"
import { NumberContext } from "../context/NumberContext"
import { useContext } from "react"

const StyleForm = styled.form `
    width: 30%;
    margin: 20px auto;
    padding: 20px;
    border: 2px solid #00eeff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    legend {
        text-align: center;
        margin-bottom: 20px;
        color: #ff009d;
    }

    input {
        color: #ff009d;
        width: 70%;
        margin: 10px auto;
        background-color: #121212;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
        border: 2px solid #00eeff;
    }

    input:focus {
        outline: none;
        background-color: #262626;
    }

    input::placeholder {
        color: #a1a1a1;
    }

    .btns {
        width: 40%;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
    }

    .btns button {
        padding: 5px;
        border-radius: 10px;
    }

    .limpar {
        background-color: #121212;
        border: 2px solid #0077ff;
        color: #0077ff;
        transition: 250ms;
    }

    .limpar:hover {
        cursor: pointer;
        background-color: #0077ff;
        color: #121212;
        border: 2px solid #121212;
        box-shadow: 0 0 10px #0077ff;
        transition: 250ms;
    }

    .criar {
        background-color: #121212;
        border: 2px solid #00ff2b;
        color: #00ff2b;
        transition: 250ms;
    }

    .criar:hover {
        cursor: pointer;
        background-color: #00ff2b;
        color: #121212;
        border: 2px solid #121212;
        box-shadow: 0 0 10px #00ff2b;
        transition: 250ms;
    }
`

function Form(props) {
    const {adicionar} = useContext(NumberContext)

    return(
        <>
            <StyleForm onSubmit={props.addTicket}>
                <legend>Criar Ticket</legend>

                <input type="text" placeholder="Telefone" name="tel" onChange={props.formaTicket} value={props.tickets.tel}/>
                <input type="text" placeholder="Pedido" name="pedido" onChange={props.formaTicket} value={props.tickets.pedido}/>
                <input type="text" placeholder="Valor" name="valor" onChange={props.formaTicket} value={props.tickets.valor}/>

                <div className="btns">
                    <button className="limpar" type="reset">Limpar</button>
                    <button className="criar" type="submit" onClick={adicionar}>Criar</button>
                </div>
            </StyleForm>
        </>
    )
}

export default Form