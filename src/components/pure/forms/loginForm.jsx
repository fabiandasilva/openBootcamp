/**
 * Componente que va a contener un formulario para
 * autenticacion de usario
 */

import React, { useState } from "react";

export default function loginForm() {
  const initialCredentials = [
    {
      user: "",
      password: "",
    },
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [credentials, setCredentials] = useState(initialCredentials);

  return <div>loginForm</div>;
}
