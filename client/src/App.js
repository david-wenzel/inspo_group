import { UserProvider } from "./context/user";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Signup from "./Signup";

import './App.css';

function App() {

  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();
  const [errorsList, setErrorsList] = useState([]);

  useEffect(() => {
    fetch("/boards")
      .then((res) => res.json())
      .then((data) => {
        setBoards(data);
      });
  }, []);

  function addBoard(board) {
    fetch("/boards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(board),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setGames([...boards, data]);
          navigate("/boards");
        } else {
          setErrorsList(errorsList);
        }
      });
  }

  function deleteBoard(id) {
    const updatedBoards = boards.filter((board) => board.id !== id);
    setBoards(updatedBoards);
  }


  return (
    <div className="App">
    <UserProvider>
      <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/boards"
              element={
                <Boards
                  boards={boards}
                  setBoards={setBoards}
                  deleteBoard={deleteBoard}
                />
              }
            />
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/addboard"
              element={
                <AddBoardForm addBoard={addBoard} errorsList={errorsList} />
              }
            />
          </Routes>
          </UserProvider>

    </div>
  );
}

export default App;
