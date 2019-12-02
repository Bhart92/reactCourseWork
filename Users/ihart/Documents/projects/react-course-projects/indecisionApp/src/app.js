class IndecisionApp extends React.Component{
  render(){
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    const options = ['1', '2', '3'];
    return(
      <div>
      <Header title={title} subTitle={subTitle}/>
      <Action />
      <Options options={options}/>
      <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render(){
    return (
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}
class Action extends React.Component{
  handlePick(){
    alert('handled');
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}
class Options extends React.Component{
  constructor(props){
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll(){
    console.log(this.props.options);
  }
  render(){
    return (
      <div>
        <ol>
        {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
        </ol>
        <button onClick={this.removeAll}>Remove All</button>
      </div>
    );
  }
}
class Option extends React.Component{
  render(){
    return (
      <div>
      {this.props.optionText}
      </div>
    );
  }
}
class AddOption extends React.Component{
  handleOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      alert('there is an option');
    }
    alert('no options added');
  }
  render(){
    return (
      <div>
      <form onSubmit={this.handleOption}>
      <input type='text' name='option'/>
      <button>Add option</button>
      </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
