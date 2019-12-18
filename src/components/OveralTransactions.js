import React from "react";
import { connect } from "react-redux";

class OverallTransactions extends React.Component {
  state = {};
  render() {
    const { EUR_PLN: currency } = this.props.curr.currency;
    // console.log(this.props.data);

    let overall = this.props.data.map(el => {
      let sum = "";
      sum += el.value;
      return sum;
    });

    // let test2 = overall.map(el => {
    //   return (
    //     <div className="square">
    //       Łączna wartość transakcji:
    //       <p>Wartość: {(el.value * currency).toFixed(2)}zł</p>
    //     </div>
    //   );
    // });
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
    const qwe = sum(overall);
    console.log(qwe);

    return (
      <div className="square">
        Łączna wartość transakcji:
        <p>{(qwe * currency).toFixed(2)}zł</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { curr: state };
};

export default connect(mapStateToProps)(OverallTransactions);
