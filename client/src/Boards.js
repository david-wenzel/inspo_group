import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink } from "react-router-dom";
import AddBoardForm from "./AddBoardForm";

// import BoardCard from "./BoardCard";

function Boards({ boards, errorsList, deleteBoard, addBoard }) {
  const { loggedIn } = useContext(UserContext);

  const renderBoards = boards.map((board) => (
    <li key={board.id}>
      <NavLink to={`/boards/${board.id}`}>
        <h1 id="section">{board.title}</h1>
      </NavLink>
    </li>
  ));

  if (loggedIn) {
    return (
      <div>
        <AddBoardForm errorsList={errorsList} addBoard={addBoard} />
        <br />
        <h1>boards</h1>
        {renderBoards}
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please Login or Signup</h3>
      </div>
    );
  }
}

export default Boards;
