class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAlertOption = this.handleAlertOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  handleDeleteOptions(){
    this.setState(() => ({ options: [] }));
  }
  handleAlertOption(){
    const randomPick = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomPick]);
  }
  handleAddOption(option){
    if(!option){
      return 'Enter valid item'
    } else if(this.state.options.indexOf(option) > -1){
      return 'this option already exits'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  render(){
    const subTitle = 'Put your life in the hands of a computer';
    return(
      <div>
      <Header subTitle={subTitle}/>
      <Action
      hasOptions = {this.state.options.length > 0}
      handleAlertOption={this.handleAlertOption}
      />
      <Options
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOption
      handleAddOption={this.handleAddOption}
      />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};
const Header = (props) => {
    return (
      <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
      </div>
    );
}
Header.defaultProps = {
  title: 'Indecision'
};
const Action = (props) => {
  return (
      <div>
        <button
        onClick={props.handleAlertOption}
        disabled={!props.hasOptions}
        >What should I do?</button>
      </div>
    );
}
const Options = (props) => {
    return (
      <div>
        <ol>
        {props.options.map((option) => <Option key={option} optionText={option}/>)}
        </ol>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
      </div>
    );
}
const Option = (props) => {
    return (
      <div>
      {props.optionText}
      </div>
    );
  }
class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
  }
  render(){
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
      <input type='text' name='option'/>
      <button>Add option</button>
      </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp options={['1', '2']}/>, document.getElementById('app'));
