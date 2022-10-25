import styled from "styled-components"
import { useContext, useState } from "react"
import Form from "./Form"
import Ticket from "./Ticket"
import Painel from "./Painel"
import { NumberContext } from "../context/NumberContext"

const StyleMain = styled.div `
    display: flex;
    justify-content: space-evenly;
`

const StyleLista = styled.div `
    width: 70%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

function ListaTickets() {
    const [tickets, setTickets] = useState([])
    const [novoTicket, setNovoTicket] = useState({
        "tel": "",
        "pedido": "",
        "valor": ""
    })
    const {remover} = useContext(NumberContext)

    function formaTicket(e) {
        setNovoTicket({...novoTicket, [e.target.name]: e.target.value})
    }

    function addTicket(e) {
        e.preventDefault()

        setTickets([...tickets, novoTicket])
    }

    function removeTicket(tick) {
        let listaTickets = tickets.filter((t) => t !== tick)

        remover(listaTickets)
        setTickets(listaTickets)
    }

    return(
        <>
            <StyleMain>
                <Form addTicket={addTicket} tickets={tickets} formaTicket={formaTicket}/>
                <Painel/>
            </StyleMain>

            <StyleLista>
                {
                    tickets.map((tick, index) => <Ticket 
                        key = {index}
                        pedido = {tick.pedido}
                        tel = {tick.tel}
                        valor = {tick.valor}
                        remove = {removeTicket.bind(this, tick)}
                    />)
                }
            </StyleLista>
        </>
    )
}

export default ListaTickets