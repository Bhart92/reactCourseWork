import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component{
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  };
  handleDeleteOption = (optionText) => {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return optionText !== option;
        })
      }));
  };
  handleAlertOption = () => {
    const randomPick = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomPick];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleAddOption = (option) => {
    if(!option){
      return 'Enter valid item'
    } else if(this.state.options.indexOf(option) > -1){
      return 'this option already exits'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };
  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({ options }));
      }
    }
    catch(error){
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      const options = localStorage.setItem('options', json);
    }
  }
  render(){
    const subTitle = 'Put your life in the hands of a computer';
    return(
      <div>
      <Header subTitle={subTitle}/>
      <div className="container">
      <Action
      hasOptions = {this.state.options.length > 0}
      handleAlertOption={this.handleAlertOption}
      />
      <div className="widget">
      <Options
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      handleDeleteOption={this.handleDeleteOption}
      />
      <AddOption
      handleAddOption={this.handleAddOption}
      />
      </div>
      </div>
      <OptionModal
      selectedOption={this.state.selectedOption}
      handleClearSelectedOption={this.handleClearSelectedOption}
      />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};
