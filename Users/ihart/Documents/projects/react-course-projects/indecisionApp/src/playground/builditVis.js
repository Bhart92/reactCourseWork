let visible = false;
const toggle = () => {
visible = !visible;
render();
};

const render = () => {
  const template = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggle}>{visible ? 'hide details': 'Show details'}</button>
    {visible && (<p>Here are some details</p>)}
    </div>
  );

  const container = document.getElementById('app');

  ReactDOM.render(template, container);
};
render();
