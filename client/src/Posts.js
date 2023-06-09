import { useState, useEffect, useContext } from "react";
import { UserContext } from "./context/user";
import { useParams } from "react-router-dom";
import "./App.css";

import PostCard from "./PostCard";
import PostForm from "./PostForm";

export default function Posts({
  boards,
  addPost,
  deletePost,
  handleEditPost,
  errorsList,
}) {
  const [currentBoard, setCurrentBoard] = useState({ posts: [] });
  //   const [errorsList, setErrorsList] = useState([]);
  const { loggedIn } = useContext(UserContext);

  const params = useParams();
  const parsedId = parseInt(params.id);

  useEffect(() => {
    const foundBoard = boards.find(({ id }) => id === parsedId);
    setCurrentBoard(foundBoard);
  }, [boards, parsedId]);

  let posts = [];
  if (currentBoard && currentBoard.posts) {
    posts = currentBoard.posts.map((post) => post);
  }

  let renderPosts;
  if (posts) {
    renderPosts = posts.map((post) => (
      <PostCard
        key={post.id}
        post={post}
        handleEditPost={handleEditPost}
        deletePost={deletePost}
      />
    ));
  }

  if (loggedIn && currentBoard && currentBoard.title) {
    return (
      <div>
        <h1 className="title">{currentBoard.title}</h1>
        <PostForm id={parsedId} addPost={addPost} errorsList={errorsList} />
        <br/>
        {renderPosts}
      </div>
    );
  } else {
    return (
      <div>
        <h3>404 board not found</h3>
      </div>
    );
  }
}
