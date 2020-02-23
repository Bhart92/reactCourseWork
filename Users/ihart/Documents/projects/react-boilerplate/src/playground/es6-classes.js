//Add second optional item to constructor -- age - default 0
//set up new method - getDescription -- return string  - Name is age years old
class Person {
  constructor(name = 'Anon', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hello, I am ${this.name}`;
  }
  getDescription(){
    return `${this.name} is ${this.age} years old`
  }
}
class Student extends Person{
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor){
      description += `Their major is ${this.major}`;
    }
    return description;
  }
}
const me = new Student('Brandon Hart', '27', 'Computer science');
console.log(me.getDescription());

const anon = new Student();
console.log(anon.getDescription());
//challenge
//traveler class will extend Person
  //add support for homeLocation
  //override getGreeting
    //1. if traveler has homeLocation include getGreeting -- 'hi, im blank, my homeLocation is'
    //2. if no homeLocation - just call getGreeting

    class Traveler extends Person{
      constructor(name, homeLocation){
        super(name);
        this.homeLocation = homeLocation;
      }
      getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
          return `${greeting}. My home location is ${this.homeLocation}`;
        }
        return greeting;
      }
    }

const brandon = new Traveler('Brandon', "CA");
console.log(brandon.getGreeting());
const sanny = new Traveler('Sanny');
console.log(sanny.getGreeting());
//
