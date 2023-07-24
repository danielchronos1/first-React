import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import User from "../../components/User";

function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // transformam linkul in json
      .then((users) => setUsers(users)) // users o sa aiba o stare deja, ceea ce am luat din API
      .catch((err) => console.error("error", err)); // in caz ca nu putem lua info din api vine eroare
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} {...user} /> 
      ))}
    </div>
  );
}

export default UsersPage;
