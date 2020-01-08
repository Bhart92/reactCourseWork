import React from 'react';
import moment from 'moment';

// const date = new Date();
const now = moment();
console.log(now.format());

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };
  onChangeDescription = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onChangeNote = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onChangeAmount = (e) => {
    const amount = e.target.value;
    if(amount.match(/^\d+(\.\d{0,2})?$/)){
      this.setState(() => ({ amount }));
    }
  };
  render(){
    return (
    <div>
<form>
  <input
    type='text'
    placeholder='Description'
    autoFocus
    value={this.state.description}
    onChange={this.onChangeDescription}
    />
  <input
    type='text'
    placeholder='Amount'
    value={this.state.amount}
    onChange={this.onChangeAmount}
    />
    <textarea
    placeholder='enter note(optional)'
    value={this.state.note}
    onChange={this.onChangeNote}
    >
    </textarea>
    <button>Add Expense</button>

</form>
    </div>
    )
  }
}
