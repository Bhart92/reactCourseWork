const person = {
  name: 'brandon',
  age: 27,
  location: {
    city: 'P-town',
    temp: 85
  }
};

const {name, age} = person;


console.log(`${name} is ${age}`);

const {city, temp: temperature} = person.location;
if(city && temperature){
  console.log(`its ${temperature} in ${city}`);
}
