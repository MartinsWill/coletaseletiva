import React, { useState } from "react";
import { database } from "../services/firebase";
import "../styles/styles.css";
import { useHistory, useParams } from "react-router-dom";

function Editar() {
  const { id } = useParams();
  const [updateColeta, setUpdateColeta] = useState("");
  const [updateAdress, setUpdateAdress] = useState("");
  const history = useHistory();
  const editColeta = (e) => {
    e.preventDefault();
    const coletaRef = database.ref(`pontosdeColetas/${id}`);
    coletaRef.set({
      nPontoColeta: updateColeta,
      endereco: updateAdress,
    });
    history.push("/List");
  };

  return (
    <div>
      <main>
        <div className="container">
          <h1> Editar</h1>
          <form autoComplete="off" onSubmit={editColeta}>
            <input
              type="text"
              placeholder="Nome do ponto de coleta"
              onChange={(e) => setUpdateColeta(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Endereço"
              onChange={(e) => setUpdateAdress(e.target.value)}
            ></input>
            <button>Salvar</button>
          </form>
        </div>
      </main>
    </div>
  );
}
export default Editar;
