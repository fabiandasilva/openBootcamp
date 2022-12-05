import React, { useState } from "react";

const RegisterForms = () => {
  const initialData = [
    {
      user: "",
      name: "",
      email: "",
      password: "",
    },
  ];
  const [data, setData] = useState(initialData);

  return <div />;
};

export default RegisterForms;
