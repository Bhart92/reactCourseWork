
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: []
};
const formVal = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderReact();
  }
};
const resetOptions = () => {
  app.options = [];
  renderReact();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
    alert(option);
};
const renderReact = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <ol>
    {
      app.options.map((option) => <li key={option}>{option}</li>)
    }
    </ol>
    <form onSubmit={formVal}>
    <input type='text' name='option'/>
    <button>Add option</button>
    <button disabled ={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
    </form>
    <button onClick={resetOptions}>Reset Options</button>
  </div>
  );
  const appRoot = document.getElementById('app');

  ReactDOM.render(template, appRoot);
};
renderReact();
