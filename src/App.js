import react from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    //BEM
    <div className="app">
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
