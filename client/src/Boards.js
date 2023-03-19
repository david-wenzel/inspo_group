import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink } from "react-router-dom";
import AddBoardForm from "./AddBoardForm";
import './App.css';

// import BoardCard from "./BoardCard";

function Boards({ boards, errorsList, addBoard }) {
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
        <h1 className="title">inspo.Boards</h1>
        <AddBoardForm errorsList={errorsList} addBoard={addBoard} />
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
