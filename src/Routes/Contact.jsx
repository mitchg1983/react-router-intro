import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";

export default function Contact() {
  const [userList, setUserList] = useState([{}]);

  return (
    <div>
      <h3>Your Contact Page</h3>
      <Link to="/contact/contactform">New Contact Form</Link>
      <p>Mailing Address & Phone Number</p>
      <Outlet />
      <br />
    </div>
  );
}
