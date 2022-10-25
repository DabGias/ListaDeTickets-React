import styled from "styled-components"
import { useContext } from "react"
import { NumberContext } from "../context/NumberContext"

const StyleCont = styled.div `
    p {
        margin: 80px auto;
        font-size: 32px;
        text-align: center;
    }

    .contagem {
        color: #ff009d;
        display: inline;
    }
`

function Contagem() {
    const {number} = useContext(NumberContext)

    return(
        <>
            <StyleCont>
                <p>Contagem: <p className="contagem">{number}</p></p>
            </StyleCont>
        </>
    )
}

export default Contagem