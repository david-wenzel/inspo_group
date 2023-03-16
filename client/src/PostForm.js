import { useState, useContext } from 'react'
import { UserContext } from "./context/user";




export default function GoalForm({id, addPost}) {

const { user } = useContext(UserContext);

  
  const initialValues ={
    img_url: '',
    post_body: '',
    board_id: id,
    user_id: user.id
  }

  console.log(initialValues)


  const[values, setValues] = useState(initialValues)

  const handleChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
        addPost(
          values
        );
  }

  
  
  
  
  
  
  
    return (
    <div>
       <form id='postForm' onSubmit={handleSubmit} autoComplete="off">
          <label>
            <span >Add New Post:</span>
            <br/>
            <input
            className="form-input"
              type="text"
              name="img_url"
              placeholder="img_url"
              value={values.img_url}
              onChange={handleChange}
            />
            <br/>
            <input
            className="form-input"
              type="text"
              name="post_body"
              placeholder="post_body"
              value={values.post_body}
              onChange={handleChange}
            />
            </label>
            <input type="submit" value="+" />
        </form>
    </div>
  )
}
