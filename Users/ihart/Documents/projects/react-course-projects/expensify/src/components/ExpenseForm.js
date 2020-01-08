import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
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
  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
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
    <SingleDatePicker
      date={this.state.createdAt}
      onDateChange={this.onDateChange}
      focused={this.state.calendarFocused}
      onFocusChange={this.onFocusChange}
      numberOfMonths={1}
      isOutsideRange={(day) => false}
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
