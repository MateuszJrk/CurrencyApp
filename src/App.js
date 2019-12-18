import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCurrency } from "./actions/fetchCurrency";
import AddTransaction from "./components/AddTransaction";
import TaskList from "./components/TaskList";
import HighestTransaction from "./components/HighestTransaction";
import OverallTransactions from "./components/OveralTransactions";

class App extends React.Component {
  counter = 1;
  state = {
    transactions: []
  };

  componentDidMount() {
    this.props.fetch();
  }
  deleteTransaction = id => {
    let transactions = [...this.state.transactions];
    transactions = transactions.filter(task => task.id !== id);
    this.setState({
      transactions
    });
  };

  addTransaction = (text, value) => {
    const transaction = {
      id: this.counter,
      text,
      value
    };

    this.counter++;

    this.setState({
      transactions: [...this.state.transactions, transaction],
      sorted: [...this.state.transactions]
    });

    return true;
  };

  render() {
    const { EUR_PLN: currency } = this.props.data.currency;

    return (
      <div className="row container">
        <div className="col-4">
          <HighestTransaction data={this.state.transactions} />
          <OverallTransactions data={this.state.transactions} />
        </div>
        <div className="col-8">
          <h1 className="d-flex justify-content-center">
            Currency Converter APP
          </h1>
          <h3 className="d-flex justify-content-center">
            Todays rate EUR -> PLN:
          </h3>
          <h3 className="mr-4 d-flex justify-content-center">
            {this.props.data ? currency : "Loading..."}
          </h3>
          <AddTransaction add={this.addTransaction} />
          <TaskList
            tasks={this.state.transactions}
            sorted={this.state.sorted}
            delete={this.deleteTransaction}
          />
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetch: () => fetchCurrency()
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
