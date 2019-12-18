import React from "react";
import { connect } from "react-redux";

class Task extends React.Component {
  render() {
    const { value, text } = this.props.task;
    const { EUR_PLN: currency } = this.props.data.currency;

    return (
      <div className="row">
        <strong>"{text}"</strong>
        <strong className="ml-2">{(value * currency).toFixed(2)} zł</strong>
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
  return { data: state };
};

export default connect(mapStateToProps)(Task);
