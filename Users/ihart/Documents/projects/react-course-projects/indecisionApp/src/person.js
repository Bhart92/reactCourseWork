//true is 18 and over, else false
const isAdult = (age) => {
  if(age >= 18){
    return true
  }
};

//true is 21 and over, else false
export const canDrink = (age) => {
  if(age >= 21){
    return true;
  }
  return false;
};


export {isAdult};
