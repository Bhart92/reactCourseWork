// var based variables can reassign nd redefine
var nameVar = 'Andrew';
var nameVar = 'mike';
console.log('nameVar', nameVar);

let nameLet = 'jon';
nameLet = 'julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//block scoping
  //bound to a block of code such as an if statement or a block or code

  var fullName = 'Brandon Hart';

  if(fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
  }
  console.log(firstName);
