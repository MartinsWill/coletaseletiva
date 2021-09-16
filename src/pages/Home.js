import React from "react";
import Background  from "../assets/43124.jpg";
function Home() {
  return (
    <div className="home">
      <div className="main-container">
        <p>
          Olá, bem vindo ao<span className="span-style">Coleta Seletiva.</span>
        </p>
        <p>
          Um sistema que permite você a
          <span className="span-style">monitorar</span> e
          <span className="span-style">controlar</span> suas atividades.
        </p>
        <img src={Background} alt="" />
      </div>
    </div>
  );
}

export default Home;
