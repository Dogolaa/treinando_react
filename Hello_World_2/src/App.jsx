import { useState } from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

function App() {
  const [count, setCount] = useState(0);

  return (
   
      <div>

        <h1>Componentes em React </h1>

        <FirstComponent />

        <Events />

        <Challenge />

      </div>
    
  );
}

export default App;
