import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

export default function GoalsDetail({ sections, handleEditGoal, handleAddGoal, handleDeleteGoal }) {
  // useParams
  // const { id } = useParams();
  const params = useParams();
  // browswer bar returns a number that is a string so we to to parseInt to get it back to a integer to compare to our sections object
  const parsedId = parseInt(params.id)

  // find section with same id as id from the browser bar
  const foundSection = sections.find(({ id }) => id === parsedId);

  // each goal object which contains id, goal, section_id
  // let goals = foundSection.goals.map((goal) => goal);
  let goals
  if(foundSection) {
    goals = foundSection.goals.map((goal) => goal);
 }

  // console.log(goals);




  function handleDeleteClick(e, goal) {
    fetch(`http://localhost:9292/goals/${goal.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      // .then((data) => console.log(data));
      .then((deletedGoal) => handleDeleteGoal(deletedGoal));
  }




// breaks on refresh because we lose state - may need to add if statment to do a network call to fetch data 
 let renderGoals = goals.map((goal) => (
    <GoalsCard
      key={goal.id}
      goal={goal}
      handleDeleteClick={handleDeleteClick}
      handleEditGoal={handleEditGoal}
    />
  ));

  





  return( 
  <div>
    <NavBar />
   <h1 className="title">{foundSection.title}</h1> 
    <br/>
    <GoalForm id={parsedId} handleAddGoal={handleAddGoal} />
    {renderGoals}
  </div>
  )
}
