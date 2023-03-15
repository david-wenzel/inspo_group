import React, { useState } from 'react'

export default function BoardsForm({addBoard}) {

    const initialValues = {
        title: "",
      };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      };

      function handleSubmit(e) {
        console.log(values)
        e.preventDefault();
        addBoard(
          values
        );
        // navigate("/");
      }



  return (
    <div >
      <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            <span style={{ fontWeight: "bold" }}>Add New Board:</span>
            <br/>
            <input
            className="form-input"
              type="text"
              name="title"
              placeholder=""
              value={values.title}
              onChange={handleInputChange}
            />
          </label>
          
          <input id='formBtn' type="submit" value="+" />
        </form>
    </div>
  )
}
