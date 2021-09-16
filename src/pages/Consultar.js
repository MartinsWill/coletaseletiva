import { database } from "../services/firebase";
import React, { useEffect, useState } from "react";
import "../components/Navbar.css";
import * as FaIcons from "react-icons/fa";
import Swal from "sweetalert2";

function Consultar() {
  const [dadosColetas, setDadosColetas] = useState({});

  useEffect(() => {
    const coletaRef = database.ref("pontosdeColetas/");
    coletaRef.on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setDadosColetas({
          ...snapshot.val(),
        });
      } else {
        setDadosColetas({});
      }
    });
  }, []);

  const deleteColeta = (id) => {
    if (
      Swal.fire({
        title: "Tem certeza que deseja excluir esse item?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim",
      }).then((result) => {
        if (result.isConfirmed) {
          const coletaRef = database.ref("pontosdeColetas/");
          coletaRef.child(`${id}`).remove();
        }
      })
    ) {
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td className="td-style"> Nome do ponto de Coleta</td>
            <td className="td-style"> Endereço</td>
            <td className="td-style"> Ação</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(dadosColetas).map((id) => {
            return (
              <tr>
                <td>{dadosColetas[id].nPontoColeta}</td>
                <td>{dadosColetas[id].endereco}</td>
                <td>
                  <a onClick={() => deleteColeta(id)}>
                    <FaIcons.FaTrashAlt />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Consultar;
