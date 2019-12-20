import React from "react";
import { connect } from "react-redux";

class OverallTransactions extends React.Component {
  state = {};
  render() {
    const { EUR_PLN: currency } = this.props.curr.currency;

    let overall = this.props.data.map(el => {
      let sum = "";
      sum += el.value;
      return sum;
    });
    console.log(overall);
    // function to add all transaction values
    function sum(input) {
      if (toString.call(input) !== "[object Array]") return false;

      var total = 0;
      for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
          continue;
        }
        total += Number(input[i]);
      }
      return total;
    }
    const transaction = sum(overall);

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
