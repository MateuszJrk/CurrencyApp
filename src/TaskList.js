import React from "react";
import Task from "./Task";

const TaskList = props => {
  console.log(props.tasks);
  const tasks = props.tasks.map(task => {
    console.log(task);

    // const test = task.sort((a, b) => b.value - a.value).slice(0, 1);
    return <Task task={task} delete={props.delete} />;
  });
  // let highest = props.tasks.sort((a, b) => b.value - a.value);
  // let sorted = highest.splice(0.1);
  // console.log(sorted);

  return (
    <div className="">
      <h2 className="col-12 d-flex justify-content-center">Transactions:</h2>

      <div className="d-flex justify-content-center">
        <ul style={{ listStyle: "none" }}>
          <li className="mb-2">{tasks ? tasks : ""}</li>
          {/* <li className="mb-2">{highest ? highest : ""}</li> */}
        </ul>
      </div>
      <p>d</p>
    </div>
  );
};
export default TaskList;
