import React from "react";
import PropTypes from "prop-types";

import { Contact } from "../../models/contact.class.js";

const ContactComponent = ({ contact }) => {
  console.log(contact);

  return (
    <div>
      <h1>Contact</h1>
      <h2>Name: {contact.name}</h2>
      <h2>Last Name: {contact.lastName}</h2>
      <h2>Email: {contact.email}</h2>
      <h2>Status: {contact.connected ? "IN LINE" : "NOT AVAILABLE"} </h2>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
