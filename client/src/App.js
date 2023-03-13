import { UserProvider } from "./context/user";
// import { useEffect, useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Signup from "./Signup";
// import AddBoardForm from "./AddBoardForm"
// import Boards from "./Boards"
// import Home from "./Home"
// import Login from "./Login"


import './App.css';
import Login from "./Login";

function App() {

//   const [boards, setBoards] = useState([]);
//   const navigate = useNavigate();
  // const [errorsList, setErrorsList] = useState([]);

//   useEffect(() => {
//     fetch("/boards")
//       .then((res) => res.json())
//       .then((data) => {
//         setBoards(data);
//       });
//   }, []);

//   function addBoard(board) {
//     fetch("/boards", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(board),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (!data.errors) {
//           setBoards([...boards, data]);
//           navigate("/boards");
//         } else {
//           setErrorsList(errorsList);
//         }
//       });
//   }

//   function deleteBoard(id) {
//     const updatedBoards = boards.filter((board) => board.id !== id);
//     setBoards(updatedBoards);
  // }


  return (
    <div className="App">
    <UserProvider>
      <NavBar />
      <Signup />
      <Login />
      </UserProvider>

    </div>
  );
  }
export default App;
