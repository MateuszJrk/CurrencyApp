import React from "react";
import { connect } from "react-redux";

class OverallTransactions extends React.Component {
  state = {};
  render() {
    const { EUR_PLN: currency } = this.props.curr.currency;

    let overall = this.props.data.map(el => {
      let sum = "";
      sum += el.value;
      return parseInt(sum);
    });

    let transaction = overall.reduce((total, value) => total + value, 0);

    return (
      <div className="square">
        Łączna wartość transakcji:
        <p>{(transaction * currency).toFixed(2)}zł</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { curr: state };
};

export default connect(mapStateToProps)(OverallTransactions);
