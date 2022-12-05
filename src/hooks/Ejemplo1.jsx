/* Ejemplo de uso del Hook useState
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, ademas, poder modificarlo
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
  /* Valor inicial para un contador */
  const valorInicial = 0;

  /* Valor inicial para una persona */
  const personaInicial = {
    nombre: "Martin",
    email: "marting@iamgaina.com",
  };

  /**
   * Queremos que el VALORINICAL y PERSONAICIAL
   * sean parte dle estado del componenete para asi poder gestionar su cambio
   * y que este se vea reflejado en la vista del componente
   * const[contador, setcontador] =usestate(valorInicial)
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  function incrementarContador() {
    //? funcion para cambiar (nuevoValor)
    setContador(contador + 1);
  }

  function actualizarPersona() {
    setPersona({
      nombre: "Fabian",
      email: "dasilvafabian.j@gmail.com",
    });
  }
  {
    return (
      <div>
        <h1>Ejemplo de useState()</h1>
        <h2>Contador: {contador}</h2>
        <h2>Datos de la persona: </h2>
        <h3>Nombre: {persona.nombre}</h3>
        <h3>Email: {persona.email}</h3>
        {/* Bloque de botones para actualizar el estado */}
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Incrementar contador</button>
      </div>
    );
  }
};

export default Ejemplo1;
