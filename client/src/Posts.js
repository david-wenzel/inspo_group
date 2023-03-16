import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "./PostCard";
import PostForm from "./PostForm"
// import NavBar from "./NavBar";

export default function Posts({boards, addPost}) {
  // useParams
  const params = useParams();
//   const params = useParams();
  // browswer bar returns a number that is a string so we to to parseInt to get it back to a integer to compare to our sections object
  const parsedId = parseInt(params.id)

  // find section with same id as id from the browser bar
  const foundBoard = boards.find(({ id }) => id === parsedId);
    console.log(foundBoard)
  // each goal object which contains id, goal, section_id
  // let goals = foundSection.goals.map((goal) => goal);
  let posts
  if(foundBoard) {
    posts = foundBoard.posts.map((post) => post);
 }
//  console.log(posts)

  // console.log(goals);




//   function handleDeleteClick(e, goal) {
//     fetch(`http://localhost:9292/goals/${goal.id}`, {
//       method: "DELETE",
//     })
//       .then((r) => r.json())
//       // .then((data) => console.log(data));
//       .then((deletedGoal) => handleDeleteGoal(deletedGoal));
//   }



// breaks on refresh because we lose state - may need to add if statment to do a network call to fetch data 
 let renderPosts 
 if(posts) { renderPosts = posts.map((post) => (
    <PostCard
      key={post.id}
      post={post}
    //   handleDeleteClick={handleDeleteClick}
    //   handleEditGoal={handleEditGoal}
    />
  ));}

  
// set up if else statment on refresh if we lose state to refresh boards or take back to home




  return( 
  <div>
   <h1 className="title">{foundBoard.title}</h1> 
    {/* <br/> */}
    <PostForm id={parsedId} addPost={addPost}
    // handleAddPost={handleAddPost} 
    />
    {renderPosts}
  </div>
  )
}
