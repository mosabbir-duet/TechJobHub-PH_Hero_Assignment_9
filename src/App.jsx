import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className="text-8xl text-violet-600 font-bold">
        This is a TechJobHub Website
      </p>
    </div>
  );
}

export default App;
