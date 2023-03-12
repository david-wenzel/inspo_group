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
          navigate("/");
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
        <label>
          Username (minimum 2 characters){" "}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleInputChange}
          ></input>
        </label>
        <br></br>
        <label>
          Password (must be 2-8 characters){" "}
          <input
            type="password"
            name="password"
            // added autoComplete attribute per console log message
            autoComplete="off"
            placeholder="Password"
            value={values.password}
            onChange={handleInputChange}
          ></input>
        </label>
        <br></br>
        <label>
          Confirm Password{" "}
          <input
            type="password"
            name="password_confirmation"
            // added autoComplete attribute per console log message
            autoComplete="off"
            placeholder="must match password"
            value={values.password_confirmation}
            onChange={handleInputChange}
          ></input>
        </label>
        <input type="submit" value={isLoading ? "Loading..." : "Submit"} />
      </form>
      {/* if there are errors, display them in red */}
      {errors.map((err) => (
        <li style={{ color: "red" }} key={err}>
          {err}
        </li>
      ))}
    </div>
  );
}

export default Signup;