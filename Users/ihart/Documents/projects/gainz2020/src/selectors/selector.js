import {workoutData} from '../context/workoutContext';
import randomizer from './randomizer';
export default (state, workouts) => {

    switch(state.value){
        case 'chest':
            const {chest} = workoutData;
            const chestData = {
                 chestOne: chest.workouts[Math.floor(Math.random() * chest.workouts.length)],
                 chestTwo: chest.workouts[Math.floor(Math.random() * chest.workouts.length)],
                 chestThree: chest.workouts[Math.floor(Math.random() * chest.workouts.length)]
            };
            const {chestOne, chestTwo, chestThree} = chestData;
            do {
                let chestOne = chest.workouts[Math.floor(Math.random() * chest.workouts.length)];
            } while(chestOne === chestThree);

            do {
               let chestTwo = chest.workouts[Math.floor(Math.random() * chest.workouts.length)];
            } while(chestTwo === chestThree || chestTwo === chestOne);
            return {chestOne, chestTwo, chestThree};
            break;
            case 'back':
                const {back} = workoutData;
                let backOne = back.workouts[Math.floor(Math.random() * back.workouts.length)]; 
                let backTwo = back.workouts[Math.floor(Math.random() * back.workouts.length)];
                let backThree = back.workouts[Math.floor(Math.random() * back.workouts.length)];

                do {
                    backOne = back.workouts[Math.floor(Math.random() * back.workouts.length)];
                } while(backOne === backThree);

                do {
                    backTwo = back.workouts[Math.floor(Math.random() * back.workouts.length)];
                } while(backTwo === backThree || backTwo === backOne); 
                return
            break;
            case 'shoulders':
                const {shoulders} = workoutData;
                let shouldersOne = shoulders.workouts[Math.floor(Math.random() * shoulders.workouts.length)]; 
                let shouldersTwo = shoulders.workouts[Math.floor(Math.random() * shoulders.workouts.length)];
                let shouldersThree = shoulders.workouts[Math.floor(Math.random() * shoulders.workouts.length)];
                do {
                    shouldersOne = shoulders.workouts[Math.floor(Math.random() * shoulders.workouts.length)];
                } while(shouldersOne === shouldersThree);
    
                do {
                    shouldersTwo = shoulders.workouts[Math.floor(Math.random() * shoulders.workouts.length)];
                } while(shouldersTwo === shouldersThree || shouldersTwo === shouldersOne); 
            break;  
            case 'biceps':
                const {biceps} = workoutData;
                let bicepsOne = biceps.workouts[Math.floor(Math.random() * biceps.workouts.length)]; 
                let bicepsTwo = biceps.workouts[Math.floor(Math.random() * biceps.workouts.length)];
                let bicepsThree = biceps.workouts[Math.floor(Math.random() * biceps.workouts.length)];
                do {
                    bicepsOne = biceps.workouts[Math.floor(Math.random() * biceps.workouts.length)];
                } while(bicepsOne === bicepsThree);
    
                do {
                    bicepsTwo = biceps.workouts[Math.floor(Math.random() * biceps.workouts.length)];
                } while(bicepsTwo === bicepsThree || bicepsTwo === bicepsOne); 
                console.log(bicepsOne);
            break;
            case 'triceps':
                const {triceps} = workoutData;
                let tricepsOne = triceps.workouts[Math.floor(Math.random() * triceps.workouts.length)]; 
                let tricepsTwo = triceps.workouts[Math.floor(Math.random() * triceps.workouts.length)];
                let tricepsThree = triceps.workouts[Math.floor(Math.random() * triceps.workouts.length)];
                do {
                    tricepsOne = triceps.workouts[Math.floor(Math.random() * triceps.workouts.length)];
                } while(tricepsOne === tricepsThree);
    
                do {
                    tricepsTwo = triceps.workouts[Math.floor(Math.random() * triceps.workouts.length)];
                } while(tricepsTwo === tricepsThree || tricepsTwo === tricepsOne); 
                console.log(tricepsTwo);

            break;
            case  'legs':
                const {legs} = workoutData;
                let legsOne = legs.workouts[Math.floor(Math.random() * legs.workouts.length)]; 
                let legsTwo = legs.workouts[Math.floor(Math.random() * legs.workouts.length)];
                let legsThree = legs.workouts[Math.floor(Math.random() * legs.workouts.length)];
                do {
                    legsOne = legs.workouts[Math.floor(Math.random() * legs.workouts.length)];
                } while(tricepsOne === legsThree);
    
                do {
                    legsTwo = legs.workouts[Math.floor(Math.random() * legs.workouts.length)];
                } while(legsTwo === legsThree || legsTwo === legsOne); 
            break;
            case 'abs':
                const {abs} = workoutData;
                let absOne = abs.workouts[Math.floor(Math.random() * abs.workouts.length)]; 
                let absTwo = abs.workouts[Math.floor(Math.random() * abs.workouts.length)];
                let absThree = abs.workouts[Math.floor(Math.random() * abs.workouts.length)];
                do {
                    absOne = abs.workouts[Math.floor(Math.random() * abs.workouts.length)];
                } while(absOne === absThree);
    
                do {
                    absTwo = abs.workouts[Math.floor(Math.random() * abs.workouts.length)];
                } while(absTwo === absThree || absTwo === absOne); 
            break;
            case 'cardio':
                const {cardio} = workoutData;
                let cardioOne = cardio.workouts[Math.floor(Math.random() * cardio.workouts.length)]; 
                let cardioTwo = cardio.workouts[Math.floor(Math.random() * cardio.workouts.length)];
                let cardioThree = cardio.workouts[Math.floor(Math.random() * cardio.workouts.length)];
                do {
                 cardioOne = cardio.workouts[Math.floor(Math.random() * cardio.workouts.length)];
                } while(cardioOne === cardioThree);
    
                do {
                    cardioTwo = cardio.workouts[Math.floor(Math.random() * cardio.workouts.length)];
                } while(cardioTwo === cardioThree || cardioTwo === cardioOne); 
            break;
            }
        }