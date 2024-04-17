import { Button } from "@mui/material";

const Challenge = () => {
    const value1 = 10;
    const value2 = 20;

    const Exibe = () => {
        alert(value1 + value2);
    }


    return (
        <div>
            <h1>Desafio</h1>
            <p> A: {value1} </p>
            <p> B: {value2} </p>
            <button onClick={Exibe}> Clique para ver a soma</button>
        </div>
    );
}

export default Challenge;