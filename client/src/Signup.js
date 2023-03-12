import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const { signup } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.errors) {
          signup(user);
        //   navigate("/");
        } else {
          setUsername("");
          setPassword("");
          setPasswordConfirmation("");
          setErrorsList(errorsList);
        }
      });
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        id="username"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br />
      <input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <input
        label="Password Confirmation"
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      ></input>
      <br />
      <input type="submit" />
      </form>
      {errorsList.map((err) => (
        <li style={{ color: "red" }} key={err}>
          {err}
        </li>
      ))}    
      </div>

  );
}

export default Signup;