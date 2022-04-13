import React, { useState } from "react";

export default function ContactForm() {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [userList, setUserList] = useState([{}]);
  return (
    <div>
      FORM
      <br />
      Name{" "}
      <input
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      ></input>
      <br />
      Phone{" "}
      <input
        type="text"
        onChange={(e) => {
          setNewPhone(e.target.value);
        }}
      ></input>
      <br />
      Age{" "}
      <input
        type="text"
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
      ></input>
      <br />
      Email{" "}
      <input
        type="text"
        onChange={(e) => {
          setNewEmail(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={() => {
        const newUser = {
          name: newName,
          phone: newPhone,
          age: newAge,
          email: newEmail,
        };
        console.log("newUser is,", newUser);
        setUserList([...userList, newUser]);
        console.log(userList)
      }}>Send New User</button>
    </div>
  );
}
