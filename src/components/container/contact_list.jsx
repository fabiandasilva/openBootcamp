import React from "react";

import { Contact } from "../../models/contact.class.js";
import ContactComponent from "../pure/contact";

export const ContactListComponent = () => {
  const deafultContact = new Contact(
    "ContactName",
    "ContactLastName",
    "contactemail@email.com",
    true
  );

  return (
    <div>    
      <ContactComponent contact={deafultContact} />
      
    </div>
  );
};
