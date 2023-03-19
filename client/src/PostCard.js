import { useState, useContext } from "react";
import { UserContext } from "./context/user";
import './App.css';


// import { useState } from 'react';
import PostEditForm from './PostEditForm';

export default function PostCard({post, handleEditPost, deletePost}) {
    const [isEdit, setIsEdit] = useState(false);
    const { user } = useContext(UserContext);


    function handleEditClick() {
        setIsEdit(!isEdit);
      }

    function handleDeleteClick(e, post) {
        e.preventDefault()
        // console.log(post)
            deletePost(post)
        }



    const renderPost = (
        <div key={post.id}>
      <img src={post.img_url} alt="" />
          <p>{post.post_body}</p>
          {/* <button id='deleteBtn'
          onClick={(e) => handleDeleteClick(e, post)}
          >X</button>  */}
          {/* <PostEditForm post={post} handleEditPost={handleEditPost} /> */}
          <button id='editBtn' onClick={(e) => handleEditClick(e, post)}>Edit</button> 
        </div>
      );



      const renderEditPost = (
        <div key={post.id}>
      <img src={post.img_url} alt="" />
          <p>{post.post_body}</p>
          <button id='deleteBtn'
          onClick={(e) => handleDeleteClick(e, post)}
          >X</button> 
          <br/>
          <PostEditForm post={post} handleEditPost={handleEditPost} handleEditClick={handleEditClick} />
          <button id='editBtn' onClick={(e) => handleEditClick(e, post)}>Edit</button> 
        </div>
      );

    const renderNotUserPost = (
        <div key={post.id}>
      <img src={post.img_url} alt="" />
        <p>{post.post_body}</p>
        </div>
    )



    return (
        <div>
          {post.user_id !== user.id ? renderNotUserPost :
            (isEdit ?
              <>{renderEditPost}</> :
              <>{renderPost}</>
            )}
        </div>
      )
}