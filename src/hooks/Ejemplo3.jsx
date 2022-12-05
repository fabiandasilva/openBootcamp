/**
 * Ejemplo Hooks:
 * -useState()
 * -useContext()
 */

/**
 * ?Componente 1: Dispone de un texto que va a tener un valor que recibe desde el padre
 */

import React, { useContext, useState } from "react";
const miContexto = React.createContext(null);

export const Componente1 = () => {
  //Inicializamos un estado vacio que va a rellenarse
  //con los datos del padre
  const state = useContext(miContexto);

  return (
    <div>
      <h1>El token es:{state.token}</h1>
      <Componente2/>
    </div>
  );
};

export const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h1>La sesión es:{state.session}</h1>
    </div>
  );
};

const MiComponenteConContexto = () => {
  const estadoInicial = {
    token: "1234567",
    session: 1,
  };

  //Creamos el estado de este componenete
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSession() {
    setSessionData({
      token: "s3kh0m0s",
      session: sessionData.session + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que esta aquie adentro puede leer los datos de session data */}
      {/* Si se actualiza los compenentes de aqui tambien lo actualizan  */}
      <h1>***Ejemplo de usState() y useContext()***</h1>
     <Componente1/>
      <button onClick={actualizarSession}>Actualizar sesion </button>
    </miContexto.Provider>
  );
};

export default MiComponenteConContexto;
