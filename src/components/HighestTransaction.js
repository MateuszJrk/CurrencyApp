import React from "react";
import { connect } from "react-redux";

class HighestTransaction extends React.Component {
  state = {};
  render() {
    const { EUR_PLN: currency } = this.props.curr.currency;
    //sorting transactions and showing first one
    let test = [...this.props.data];
    let highest = test.sort((a, b) => b.value - a.value);
    let sorted = highest.splice(0, 1);

    let transaction = sorted.map(el => {
      return (
        <div key={el.id} className="square">
          Najwyższa Transakcja:
          <p>Nazwa: "{el.text}"</p>
          <p>Wartość: {(el.value * currency).toFixed(2)}zł</p>
        </div>
      );
    });

    return <div>{transaction}</div>;
  }
}

const mapStateToProps = state => {
  return { curr: state };
};

export default connect(mapStateToProps)(HighestTransaction);
