import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/styles.css";
import { database } from "../services/firebase";
import Swal from "sweetalert2";

function Cadastrar() {
  const [newColeta, setColeta] = useState("");
  const [newAdress, setAdress] = useState("");
  const history = useHistory();

  const handleCreateColeta = (e) => {
    e.preventDefault();

    if (newColeta.trim() === "") {
      return;
    }
    const coletaRef = database.ref("pontosdeColetas");

    coletaRef.push({
      nPontoColeta: newColeta,
      endereco: newAdress,
    });
    Swal.fire(
      "Ponto de coleta cadastrado!",
      "Clique no botão para continuar.",
      "success"
    ).then((result) => {
      if (result.isConfirmed) {
        history.push("/List");
      }
    });
  }
    return (
      <div>
        <main>
          <div className="container">
            <h1> Cadastrar ponto de coleta</h1>
            <form autoComplete="off" onSubmit={handleCreateColeta}>
              <input
                required
                type="text"
                placeholder="Digite o nome do ponto de coleta"
                onChange={(e) => setColeta(e.target.value)}
              ></input>
              <input
                required
                type="text"
                placeholder="Digite o endereço"
                onChange={(e) => setAdress(e.target.value)}
              ></input>
              <button>Cadastrar</button>
            </form>
          </div>
        </main>
      </div>
    );
  };


export default Cadastrar;
