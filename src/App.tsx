import React from "react";
import style from "./App.module.scss";
import Navbar from './components/navbar/Navbar'
import Destination from "./pages/destination/Destination";

function App() {
  return (
    <div className={style.App}>
      <div className={style.container}>
          <Destination />
      </div>
    </div>
  );
}

export default App;
