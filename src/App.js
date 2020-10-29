import react from "react";
import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    //BEM
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
