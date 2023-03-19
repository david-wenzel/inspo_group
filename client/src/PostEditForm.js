import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from "./context/user";
import './App.css';



export default function PostEditForm({post, handleEditPost, handleEditClick}) {

    
    const { user } = useContext(UserContext);

    
    
    const initialValues ={
        img_url: post.img_url,
        post_body: post.post_body,
        board_id: post.board_id,
        user_id: user.id
      }
    const [values, setValues] = useState(initialValues);


    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/posts/${post.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then((r) => r.json())
            .then((data) => handleEditPost(data));
            
            
      
        handleEditClick()
    }












  return (
    <div>
        <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="img_url"
          placeholder={post.img_url}
          value={values.img_url}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="post_body"
          placeholder={post.post_body}
          value={values.post_body}
          onChange={handleChange}
        />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
    </div>
  )
}
