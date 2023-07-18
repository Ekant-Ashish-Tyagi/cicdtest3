import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => setShow(true)}>Show</button>
        {show && <p>{value}</p>}
      </header>
    </div>
  );
}

export default App;
