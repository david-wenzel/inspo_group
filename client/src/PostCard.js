import React from 'react'
// import { useState } from 'react';
import PostEditForm from './PostEditForm';

export default function PostCard({post, handleEditPost, deletePost}) {
    // const [isEdit, setIsEdit] = useState(false);


    // function handleEditClick() {
    //     setIsEdit(!isEdit);
    //   }

    function handleDeleteClick(e, post) {
        e.preventDefault()
        // console.log(post)
            deletePost(post)
        }



    const renderPost = (
        <div key={post.id}>
          <h3>{post.img_url}</h3> 
          <p>{post.post_body}</p>
          <button id='deleteBtn'
          onClick={(e) => handleDeleteClick(e, post)}
          >X</button> 
          <br/>
          <PostEditForm post={post} handleEditPost={handleEditPost} />
          {/* <button id='editBtn' onClick={(e) => handleEditClick(e, goal)}>Edit</button>  */}
        </div>
      );



    //   const renderEditGoal = (
    //     <div key={goal.id}>
    //       {/* <button onClick={(e) => onDeleteClick(e, goal)}>X</button> &nbsp; */}
    //       <GoalEditForm
    //         goal={goal}
    //         onEditClick={handleEditClick}
    //         handleEditGoal={handleEditGoal}
    //       />
    //       <button id='editBtn' onClick={(e) => handleEditClick(e, goal)}>Edit</button>
    //       {/* <span style={{ fontWeight: "bold" }}>{goal.goal}</span>{" "} */}
    //     </div>
    //   );





  return (
    <div>
        {/* { isEdit? */}
    {/* //   <>{renderEditGoal}</>: */}
      <>{renderPost}</>
        {/* // } */}
    </div>
  )
}
