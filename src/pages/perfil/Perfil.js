import "./perfil.css";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

function Perfil() {
  return (
    <>
      <div>
        <Sidebar />
      </div>

      <div className="perfil">
        <div>
          <img
            className="imagen"
            src="https://firebasestorage.googleapis.com/v0/b/registro-59ebe.appspot.com/o/ImagesProfile%2FSHODAN.png?alt=media&token=bbac8d29-9a70-4b3f-911b-0329df71fdff"
            alt="shodan"
          />
        </div>
        <div>
          <pre>
            <h1>
              {" "}
              Shodan
            </h1>
          </pre>
          <pre>
            <p>
              <i className="fas fa-envelope" /> shodan.vlad01@gmail.com
            </p>
          </pre>
          <pre>
            <p>
              <i className="fas fa-phone" /> 999011003
            </p>
          </pre>
        </div>
        <div>
          <p>
            <i className="fas fa-home" /> Mateo Cueva Lte 37{" "}
          </p>
          <button>Editar por favor Perfil</button>
        </div>
      </div>
    </>
  );
}

export default Perfil;
