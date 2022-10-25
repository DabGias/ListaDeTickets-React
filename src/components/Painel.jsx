import styled from "styled-components"
import Contagem from "./Contagem"

const StylePainel = styled.div `
    width: 30%;
    margin: 20px auto;
    padding: 20px;
    border: 2px solid #00eeff;
    border-radius: 20px;

    h1 {
        margin-bottom: 20px;
        color: #ff009d;
        text-align: center;
    }
`

function Painel() {
    return(
        <>
            <StylePainel>
                <h1>Painel de Contagem</h1>

                <Contagem/>
            </StylePainel>
        </>
    )
}

export default Painel