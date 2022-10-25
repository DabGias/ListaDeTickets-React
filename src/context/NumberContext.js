import { useState } from "react";
import { createContext } from "react";

export const NumberContext = createContext();

function NumberContextProvider({children}) {
    const [number, setNumber] = useState(0);

    function adicionar() {
        setNumber(number + 1)
    }

    function remover(lista) {
        setNumber(lista.length)
    }

    return(
        <NumberContext.Provider value={{number, adicionar, remover}}>
            {children}
        </NumberContext.Provider>
    );
};

export default NumberContextProvider;