import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./context/user";
// import { NavLink} from "react-router-dom";

function Navbar() {
  const { user, logout, loggedIn } = useContext(UserContext);
//   const navigate = useNavigate();

  function logoutUser() {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout();
    //   navigate("/games");
    });
  }

  if (loggedIn) {
    return (
      <div>
        <h1>Inspo.Group</h1>
        <h3>Hello {user.username}</h3>
        <button onClick={logoutUser}>Logout</button>
        {/* <NavLink to="/"> */}
          {/* <button>Home</button> */}
        {/* </NavLink> */}
        <hr />
      </div>
    );
  } else {
    return (
      <div>
       <NavLink to={'/'} ><h1>Inspo.Group</h1></NavLink>
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