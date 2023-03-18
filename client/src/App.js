import { UserProvider} from "./context/user";
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
    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          // Find the board in the boards state that matches the board of the new post
          const updatedBoards = boards.map((board) => {
            if (board.id === data.board.id) {
              // Add the new post to the posts of the matching board
              return {
                ...board,
                posts: [...board.posts, data],
              };
            } else {
              return board;
            }
          });
  
          setBoards(updatedBoards);
        } else {
          setErrorsList(errorsList);
        }
      });
  }



  function deletePost(post) {
      fetch(`/posts/${post.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          // Remove the deleted post from the posts array of the matching board
          const updatedBoards = boards.map((board) => {
            if (board.id === parseInt(post.board_id)) {
              return {
                ...board,
                posts: board.posts.filter((p) => p.id !== post.id)
              };
            } else {
              return board;
            }
          });
          setBoards(updatedBoards);
        }
      });
    }

 
    // function handleEditPost(editedPost){
    //   const updatedBoards = boards.map((board) => {
    //     if (board.id === parseInt(editedPost.board_id)) {
    //       return {
    //         ...board,
    //         posts: board.posts.filter((p) => p.id !== editedPost.id)
    //       };
    //     } else {
    //       return board;
    //     }
    //   });
    //   setBoards(updatedBoards);
    // }
    
  
    function handleEditPost(editedPost) {
      const updatedBoards = boards.map((board) => {
        if (board.id === parseInt(editedPost.board_id)) {
          const updatedPosts = board.posts.map((p) => {
            if (p.id === editedPost.id) {
              return editedPost;
            } else {
              return p;
            }
          });
          return {
            ...board,
            posts: updatedPosts
          };
        } else {
          return board;
        }
      });
      setBoards(updatedBoards);
    }
  

  return (
    <div className="App">
    <UserProvider>
      <Router>
      <NavBar />
      <Routes>
      <Route path="/boards" element={<Boards  boards={boards} addBoard={addBoard} errorsList={errorsList}/>} />
      <Route path="/boards/:id"  element={<Posts deletePost={deletePost} handleEditPost={handleEditPost} addPost={addPost} boards={boards}/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      </Router>
    </UserProvider>
    </div>
  );
  }
export default App;
