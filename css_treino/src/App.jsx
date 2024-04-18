import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {

  const n = 11;
  const [redTitle,setRedTitle] = useState(false);

  return (
    <div className="App">
      <h1>React com CSS!</h1>
      <MyComponent />
      <p>Esta paragrafo e do app.jsx</p>
      <p style={{ color: "purple", backgroundColor: "red" }}>
        Este paragrafo tem css em linha
      </p>
      <h2
        style={
          n < 10
            ? { color: "green", backgroundColor: "black" }
            : { color: "purple", backgroundColor: "white" }
        }
      >
        Este h2 tem css em linha dinamico
      </h2>
      <h2
        style={
          n > 10
            ? { color: "green", backgroundColor: "black" }
            : { color: "purple", backgroundColor: "white" }
        }
      >
        Este h2 tem css em linha dinamico
      </h2>


        <h3 className={redTitle ? "red-title" : "title" }> Este titulo vai ter classe dinamica</h3>

        <button onClick={()=>setRedTitle(true)}>Mudar para red</button>



        <Title />

    </div>
  );
}

export default App;
