import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import AllContacts from "./Routes/AllContacts";
import ContactForm from "./Routes/ContactForm";
import NotFound from "./Routes/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />}>
            <Route index element={<AllContacts />} />
            <Route path="contactform" element={<ContactForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
