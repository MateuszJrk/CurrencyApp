import React from "react";
import { connect } from "react-redux";

class Task extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        <strong>"{this.props.task.text}"</strong>
        <strong className="ml-2">
          {(this.props.task.value * this.props.data.currency.EUR_PLN).toFixed(
            2
          )}{" "}
          zł
        </strong>
        <button
          className="ml-2"
          onClick={() => this.props.delete(this.props.task.id)}
        >
          X
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { data: state };
};

export default connect(mapStateToProps)(Task);
