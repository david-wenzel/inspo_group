import React from 'react'
// import { useState } from 'react';
// import GoalEditForm from './GoalEditForm';

export default function PostCard({post, handleEditGoal, handleDeleteClick}) {
    // const [isEdit, setIsEdit] = useState(false);


    // function handleEditClick() {
    //     setIsEdit(!isEdit);
    //   }



    const renderPost = (
        <div key={post.id}>
          <h3>{post.img_url}</h3> 
          <p>{post.post_body}</p>
          {/* <button id='deleteBtn' onClick={(e) => handleDeleteClick(e, goal)}>X</button> 
          <br/>
          <button id='editBtn' onClick={(e) => handleEditClick(e, goal)}>Edit</button>  */}
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
