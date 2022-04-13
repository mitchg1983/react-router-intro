import React, { useState } from "react";



export default function AllContacts() {
  const [userList, setUserList] = useState([{}]);
  console.log("beginning", userList)
  return (
    <div>
      map out your contacts here
      {userList.map((user) => {
        return (
          <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}
