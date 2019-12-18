import React from "react";

class HighestTransaction extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    let test = [...this.props.data];
    let highest = test.sort((a, b) => b.value - a.value);
    let sorted = highest.splice(0.1);
    console.log(sorted);

    return (
      <div>
        {/* {this.props.data.transactions[0].value
          ? this.props.data.transactions[0].value
          : ""} */}
      </div>
    );
  }
}

export default HighestTransaction;
