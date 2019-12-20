import React from "react";
import { connect } from "react-redux";

class Transaction extends React.Component {
  render() {
    console.log(this.props);
    const { value, text } = this.props.task;
    const { EUR_PLN: currency } = this.props.data.currency;

    return (
      <div className="row square">
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

export default connect(mapStateToProps)(Transaction);
