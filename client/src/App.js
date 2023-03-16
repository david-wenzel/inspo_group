import { UserProvider } from "./context/user";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Signup from "./Signup";
// import AddBoardForm from "./AddBoardForm"
// import Home from "./Home"
import './App.css';
import Login from "./Login";
import Boards from "./Boards";
import Posts from "./Posts";

function App() {

  const [boards, setBoards] = useState([]);
  // const navigate = useNavigate();
  const [errorsList, setErrorsList] = useState([]);

  useEffect(() => {
    fetch("/boards")
      .then((res) => res.json())
      .then((data) => {
        setBoards(data);
        console.log(data)
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
          setBoards([...boards, data]);
          // navigate("/boards");
        } else {
          setErrorsList(errorsList);
        }
      });
  }
  function addPost(post) {
    console.log(post)
    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!data.errors) {
          setBoards([...boards, data]);
          // navigate("/boards");
        } else {
          setErrorsList(errorsList);
        }
      });
  }

//   function deleteBoard(id) {
//     const updatedBoards = boards.filter((board) => board.id !== id);
//     setBoards(updatedBoards);
  // }


  return (
    <div className="App">
    <UserProvider>
      <Router>
      <NavBar />
      <Routes>
      <Route path="/boards" element={<Boards  boards={boards} addBoard={addBoard} errorsList={errorsList}/>} />
      <Route path="/boards/:id" element={<Posts addPost={addPost} boards={boards}/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      </Router>
      </UserProvider>

    </div>
  );
  }
export default App;
