import React, { useContext } from "react";
import { UserContext } from "./context/user";
import BoardCard from "./BoardCard";

function Boards({ boards, setBoards, deleteBoard }) {
  const { loggedIn } = useContext(UserContext);

  const renderedBoardCards = boards.map((board) => (
      <BoardCard
        key={board.id}
        board={board}
        deleteBoard={deleteBoard}
        boards={boards}
        setBoards={setBoards}
      />
  ));

  if (loggedIn) {
    return (
      <div>
        <br />
        <h1>boards</h1>
          {renderedBoardCards}
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