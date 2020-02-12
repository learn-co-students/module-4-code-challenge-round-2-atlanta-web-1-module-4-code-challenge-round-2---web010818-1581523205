import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permTrans: [],
      transactions: [],
      search: ""
    };
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(data => {
        this.setState({
          transactions: data
        });
      });
  };

  handleChange = event => {
    // your code here
    console.log(event.target.value);
    this.setState({
      search: event.target.value
    });

    let filtered = [...this.state.transactions];
    let newFilter = filtered.filter(transaction =>
      transaction.description.includes(this.state.search)
    );
    console.log(newFilter);
    this.setState({
      transactions: newFilter
    });
  };

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
