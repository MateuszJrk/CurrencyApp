import React from "react";
import Task from "./Transaction";

const TransactionList = props => {
  const tasks = props.tasks.map(task => {
    return <Task task={task} delete={props.delete} />;
  });

  return (
    <div className="">
      <h2 className="col-12 d-flex justify-content-center">Transactions:</h2>

      <div className="d-flex justify-content-center">
        <ul style={{ listStyle: "none" }}>
          <li className="mb-2">{tasks ? tasks : ""}</li>
        </ul>
      </div>
    </div>
  );
};
export default TransactionList;
