import {workoutData} from '../context/workoutContext';
export default (state, workouts) => {

    switch(state.value){
        case 'chest':
            const {chest} = workoutData;
            let seletedChestWorkouts = {
                chestOne: chest.workouts[Math.floor(Math.random() * chest.workouts.length)],
                chestTwo: chest.workouts[Math.floor(Math.random() * chest.workouts.length)],
                chestThree: chest.workouts[Math.floor(Math.random() * chest.workouts.length)]
            }
	if( seletedChestWorkouts.chestOne === seletedChestWorkouts.chestThree){
		seletedChestWorkouts.chestOne = chest.workouts[Math.floor(Math.random() * chest.workouts.length)];
	} else if(seletedChestWorkouts.chestTwo === seletedChestWorkouts.chestOne || seletedChestWorkouts.chestTwo === seletedChestWorkouts.chestThree){
		seletedChestWorkouts.chestTwo = chest.workouts[Math.floor(Math.random() * chest.workouts.length)];
	}
            return seletedChestWorkouts;
            break;

            case 'back':
                const {back} = workoutData;
            let seletedBackWorkouts = {
                backOne: back.workouts[Math.floor(Math.random() * back.workouts.length)],
                backTwo: back.workouts[Math.floor(Math.random() * back.workouts.length)],
                backThree: back.workouts[Math.floor(Math.random() * back.workouts.length)]
            }
	if( seletedBackWorkouts.backOne === seletedBackWorkouts.backThree){
		seletedBackWorkouts.backOne = back.workouts[Math.floor(Math.random() * back.workouts.length)];
	} else if(seletedBackWorkouts.backTwo === seletedBackWorkouts.backOne || seletedBackWorkouts.backTwo === seletedBackWorkouts.backThree){
		seletedBackWorkouts.backTwo = back.workouts[Math.floor(Math.random() * back.workouts.length)];
	}
            return seletedBackWorkouts;
            break;

            case 'shoulders':
                const {shoulders} = workoutData;

            let seletedShoulderWorkouts = {
                shouldersOne: shoulders.workouts[Math.floor(Math.random() * shoulders.workouts.length)],
                shouldersTwo: shoulders.workouts[Math.floor(Math.random() * shoulders.workouts.length)],
                shouldersThree: shoulders.workouts[Math.floor(Math.random() * shoulders.workouts.length)]
            }
	if( seletedShoulderWorkouts.shouldersOne === seletedShoulderWorkouts.shouldersThree){
		seletedShoulderWorkouts.shouldersOne = shoulders.workouts[Math.floor(Math.random() * shoulders.workouts.length)];
	} else if(seletedShoulderWorkouts.shouldersTwo === seletedShoulderWorkouts.shouldersOne || seletedShoulderWorkouts.shouldersTwo === seletedShoulderWorkouts.shouldersThree){
		seletedShoulderWorkouts.shouldersTwo = shoulders.workouts[Math.floor(Math.random() * shoulders.workouts.length)];
	}
            return seletedBackWorkouts;
            break;

            case 'biceps':
                const {biceps} = workoutData;
            let seletedBicepsWorkouts = {
                bicepsOne: biceps.workouts[Math.floor(Math.random() * biceps.workouts.length)],
                bicepsTwo: biceps.workouts[Math.floor(Math.random() * biceps.workouts.length)],
                bicepsThree: biceps.workouts[Math.floor(Math.random() * biceps.workouts.length)]
            }
	if( seletedBicepsWorkouts.bicepsOne === seletedBicepsWorkouts.bicepsThree){
		seletedBicepsWorkouts.bicepsOne = biceps.workouts[Math.floor(Math.random() * biceps.workouts.length)];
	} else if(seletedBicepsWorkouts.bicepsTwo === seletedBicepsWorkouts.bicepsOne || seletedBicepsWorkouts.bicepsTwo === seletedBicepsWorkouts.bicepsThree){
		seletedBicepsWorkouts.bicepsTwo = biceps.workouts[Math.floor(Math.random() * biceps.workouts.length)];
	}
            return seletedBicepsWorkouts;
            break;

            case 'triceps':
                const {triceps} = workoutData;
            let seletedtricepsWorkouts = {
                tricepsOne: triceps.workouts[Math.floor(Math.random() * triceps.workouts.length)],
                tricepsTwo: triceps.workouts[Math.floor(Math.random() * triceps.workouts.length)],
                tricepsThree: triceps.workouts[Math.floor(Math.random() * triceps.workouts.length)]
            }
	if( seletedtricepsWorkouts.tricepsOne === seletedtricepsWorkouts.tricepsThree){
		seletedtricepsWorkouts.tricepsOne = triceps.workouts[Math.floor(Math.random() * triceps.workouts.length)];
	} else if(seletedtricepsWorkouts.tricepsTwo === seletedtricepsWorkouts.tricepsOne || seletedtricepsWorkouts.tricepsTwo === seletedtricepsWorkouts.tricepsThree){
		seletedtricepsWorkouts.tricepsTwo = triceps.workouts[Math.floor(Math.random() * triceps.workouts.length)];
	}
            return seletedtricepsWorkouts;
            break;

            case  'legs':
                const {legs} = workoutData;
            let seletedLegWorkouts = {
                legsOne: legs.workouts[Math.floor(Math.random() * legs.workouts.length)],
                legsTwo: legs.workouts[Math.floor(Math.random() * legs.workouts.length)],
                legsThree: legs.workouts[Math.floor(Math.random() * legs.workouts.length)]
            }
	if( seletedLegWorkouts.legsOne === seletedLegWorkouts.legsThree){
		seletedLegWorkouts.legsOne = legs.workouts[Math.floor(Math.random() * legs.workouts.length)];
	} else if(seletedLegWorkouts.legsTwo === seletedLegWorkouts.legsOne || seletedLegWorkouts.legsTwo === seletedLegWorkouts.legsThree){
		seletedLegWorkouts.legsTwo = legs.workouts[Math.floor(Math.random() * legs.workouts.length)];
	}
            return seletedLegWorkouts;
            break;

            case 'abs':
                const {abs} = workoutData;
            let seletedAbWorkouts = {
                absOne: abs.workouts[Math.floor(Math.random() * abs.workouts.length)],
                absTwo: abs.workouts[Math.floor(Math.random() * abs.workouts.length)],
                absThree: abs.workouts[Math.floor(Math.random() * abs.workouts.length)]
            }
	if( seletedAbWorkouts.absOne === seletedAbWorkouts.absThree){
		seletedAbWorkouts.absOne = abs.workouts[Math.floor(Math.random() * abs.workouts.length)];
	} else if(seletedAbWorkouts.absTwo === seletedAbWorkouts.absOne || seletedAbWorkouts.absTwo === seletedAbWorkouts.absThree){
		seletedAbWorkouts.absTwo = abs.workouts[Math.floor(Math.random() * abs.workouts.length)];
	}
            return seletedAbWorkouts;
            break;

            case 'cardio':
                const {cardio} = workoutData;
            let seletedCardioWorkouts = {
                cardioOne: cardio.workouts[Math.floor(Math.random() * cardio.workouts.length)],
                cardioTwo: cardio.workouts[Math.floor(Math.random() * cardio.workouts.length)],
                cardioThree: cardio.workouts[Math.floor(Math.random() * cardio.workouts.length)]
            }
	if( seletedCardioWorkouts.cardioOne === seletedCardioWorkouts.cardioThree){
		seletedCardioWorkouts.cardioOne = cardio.workouts[Math.floor(Math.random() * cardio.workouts.length)];
	} else if(seletedCardioWorkouts.cardioTwo === seletedCardioWorkouts.cardioOne || seletedCardioWorkouts.cardioTwo === seletedCardioWorkouts.cardioThree){
		seletedCardioWorkouts.cardioTwo = cardio.workouts[Math.floor(Math.random() * cardio.workouts.length)];
	}
            return seletedCardioWorkouts;
            break;
            default:
                return state;
                break;
            }
        }