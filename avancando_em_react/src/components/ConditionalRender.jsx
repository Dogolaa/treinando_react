import { useState } from "react";

const ConditionalRender = () => {
    const [x]= useState(false);
    const [name,setName] = useState("Matheus");

    return (    
        <div>
            {x && <h1>X e true</h1>}
            {!x && <h1>X e falso</h1>}

            <button onClick={() => setName("Joao")}>Mudar nome</button>


            {name === "Matheus" ? <h1>Nome: {name}</h1> : <h1>Nome: Desconhecido</h1>}


        </div>

        )

}

export default ConditionalRender;