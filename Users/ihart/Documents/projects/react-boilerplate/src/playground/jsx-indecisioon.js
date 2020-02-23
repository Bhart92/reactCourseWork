console.log('app.js is running');

//JSX -- Javascript XML
  //conditional rendering using
    //if statements
    //ternary operators
    //and statements



const user = {
  name: 'Indecision Ap',
  age: 24
};
function getLocation(location){
  if(location){
    return <p>Location: {location}</p>;
  }
}
//alternative to app.options.length ternary operator
// function renderPTag(array){
//   if(array && array.length > 0){
//     return <p>Here are your options</p>;
//   } else{
//     return <p>No options</p>;
//   }
// }

const renderReact = () => {
  const template2 = (
  <div>
  <h1>Count: {count}</h1>
  <button onClick={addOne}>+1</button>
  <button onClick={subOne}>-1</button>
  <button onClick={reset}>reset</button>
  </div>
  );
  const appRoot = document.getElementById('app');

  ReactDOM.render(template2, appRoot);
};
