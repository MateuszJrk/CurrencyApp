import React from "react";
import { connect } from "react-redux";

class AddTransaction extends React.Component {
  state = {
    text: "",
    value: ""
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleValue = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleClick = () => {
    const { text, value } = this.state;

    const add = this.props.add(text, value);
    if (add) {
      this.setState({
        text: "",
        value: ""
      });
    }
  };

  render() {
    const { value } = this.state;
    const { EUR_PLN: currency } = this.props.data.currency;

    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="form">
            <input
              className="mr-1"
              type="text"
              name="text"
              placeholder="Nazwa transakcji.."
              value={this.state.text}
              onChange={this.handleText}
              converted={currency}
            />
            <input
              type="number"
              name="text"
              placeholder="Kwota Euro..."
              value={this.state.value}
              onChange={this.handleValue}
            />
            <button className="button" onClick={this.handleClick}>
              Dodaj
            </button>
            <p className="d-flex justify-content-center">
              Otrzymasz: {currency ? (currency * value).toFixed(2) : currency}
              zł
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state };
};

export default connect(mapStateToProps)(AddTransaction);
