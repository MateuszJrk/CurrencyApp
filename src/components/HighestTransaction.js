import React from "react";

class HighestTransaction extends React.Component {
  state = {};
  render() {
    let test = [...this.props.data];
    let highest = test.sort((a, b) => b.value - a.value);
    let sorted = highest.splice(0, 1);

    let test2 = sorted.map(el => {
      return (
        <div>
          <p>
            Highest: {el.text}
            {el.value}
          </p>
        </div>
      );
    });

    return <div>{test2}</div>;
  }
}

export default HighestTransaction;
