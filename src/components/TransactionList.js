import React from "react";
import Transaction from "./Transaction";

//Need to fix unique key error in the console

const TransactionList = props => {
  const tasks = props.tasks.map(task => {
    return <Transaction task={task} delete={props.delete} />;
  });

  return (
    <div>
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
