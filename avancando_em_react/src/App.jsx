import "./App.css";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Message from "./components/Message";
import ChangeMessageStates from "./components/ChangeMessageStates";
import { useState } from "react";

const cars = [
  { name: "Fusca", brand: "Volkswagen", year: 1969 },
  { name: "Uno", brand: "Fiat", year: 1989 },
  { name: "Brasilia", brand: "Volkswagen", year: 1999 },
];




function App() {
  const [count, setCount] = useState(0);
  
  const [message, setMessage] = useState("");

const handleMessage = (msg) => {
  setMessage(msg);
}

  return (
    <>
      <h1>Avancando em React</h1>

      <div>
        <ManageData />

        <ListRender />

        <ConditionalRender />

        <ShowUserName name="Lucas" />

        <CarDetails name="Fusca" brand="Volkswagen" year={1969} />
        <CarDetails name="Uno" brand="Fiat" year={1989} />
        <CarDetails name="Brasilia" brand="Volkswagen" year={1999} />

        {cars.map((car) => (
          <CarDetails name={car.name} brand={car.brand} year={car.year} />
        ))};


        <Message msg={message}/>

         <ChangeMessageStates handleMessage={handleMessage} />

      </div>
    </>
  );
}

export default App;
