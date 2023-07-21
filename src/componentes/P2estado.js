import React,{useState,Fragmet} from 'react'

const Contador = () => {

    const [ numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log("hacer click");
        setNumero(numero+1);

    }
    return(
        <Fragmet>
            <h3>mi primer componente{numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragmet>

    );
}

export default Contador;