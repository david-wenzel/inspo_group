import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "./context/user";
import "./App.css";
// import { NavLink} from "react-router-dom";

function Navbar() {
  const { user, logout, loggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  function logoutUser() {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout();
      navigate("/login");
    });
  }

  if (loggedIn) {
    return (
      <div className="navbar">
        <NavLink to={"/boards"}>
          <h1>
            <img
              className="spin"
              src="https://64.media.tumblr.com/c7e6e1223007e837d067692242e72074/098b06a47ed3e2f5-dc/s1280x1920/811a996ad4c1dfb97ada4599a65b39c268335b83.png"
              alt="Inspo.Group"
            />
          </h1>
        </NavLink>
        {/* <h3>Hello {user.username}</h3> */}
        <button onClick={logoutUser}>Logout {user.username}</button>
        {/* <NavLink to="/"> */}
        {/* <button>Home</button> */}
        {/* </NavLink> */}
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <NavLink to={"/login"}>
          <h1>
            <img
              className="spin"
              src="https://64.media.tumblr.com/c7e6e1223007e837d067692242e72074/098b06a47ed3e2f5-dc/s1280x1920/811a996ad4c1dfb97ada4599a65b39c268335b83.png"
              alt="Inspo.Group"
            />
          </h1>
        </NavLink>
        {/* <NavLink to="/login"> */}
        {/* <button>Login</button> */}
        {/* </NavLink> */}
        {/* <NavLink to="/signup"> */}
        {/* <button>Signup</button> */}
        {/* </NavLink> */}
      </div>
    );
  }
}

export default Navbar;
