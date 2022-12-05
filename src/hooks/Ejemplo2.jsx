/* eslint-disable no-console */
/**
 * -useState()
 * -useReft()
 * useEffect()
 */
import React, { useEffect, useRef, useState } from "react";

export const Ejemplo2 = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //Vamos a crear una referencia con useRef() para asocar una variable
  // con un elemento en el DOM
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /* *
   *? Caso 1: Ejecutar SIEMPRE un snippet de codigo
   * Cada vez que haya un cambio en el estado del componente
   * se ejecuta aquello que esta dentro del useEffect()
   */
  /*   useEffect(() => {
    console.log("Cambio en el estado del comppnente");
    console.log("Mostrando referencia a elemento del DOM");
    console.log(miRef);
  }); */

  /**
   * ?Caso 2: Ejecutar solo cuando cambie contador1
   */

  useEffect(() => {
    console.log("Cambio en el estado del Contador 1");
    console.log("Mostrando referencia a elemento del DOM");
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>Ejemplo del ustate(), useRef() y useEffect</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      {/* Botones para los contadores */}
      <button onClick={incrementar1}>Incrementar contador: {contador1}</button>
      <button onClick={incrementar2}>Incrementar contador: {contador2}</button>
    </div>
  );
};
