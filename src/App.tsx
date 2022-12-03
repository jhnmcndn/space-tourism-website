import React from "react";
import style from "./App.module.scss";
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className={style.App}>
      <div className={style.container}>
          <Navbar />
      </div>
    </div>
  );
}

export default App;
