class Visibility extends React.Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visible: false
    }
  }
  toggle() {
    this.setState((prevState) => {
      return {
        visible: prevState
      }
    });
  };
  render(){
    return (
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.toggle}>{this.state.visible ? 'hide details': 'Show details'}</button>
      {this.state.visible && (<p>Here are some details</p>)}
      </div>
    );
  }
}

  ReactDOM.render(< Visibility />, document.getElementById('app'));
