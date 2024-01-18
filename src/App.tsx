import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App bg-dark-subtle ">
      <MyNav />
      <Gallery />
    </div>
  );
}

export default App;
