import React from 'react';
import uuid from 'uuid';

// export const workoutData = {
// 	chest: {
// 		value: 'chest',
// 		workouts: [{
// 			name: 'bench',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'incline',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'decline',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'dumbell flies',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'cable flies',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'incline cable flies',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'decline cable flies',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'push ups',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'triangle pushps',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'inclined bench',
// 			url: 'https://something.com'
// 		}]
// 	},
// 	back: {
// 		value: 'back',
// 		workouts: [{
// 			name: 'pulldown',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'bent over row',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'face-pull',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'Deadlifts',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'Dumbell rows',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'Suitcase rows',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'Good mornings',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'wide-grip pulldown',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'inward grip pull downs',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'hammergrip pull-up',
// 			url: 'https://something.com'
// 		}]
// 	},
// 	shoulders: {
// 		value: 'shoulders',
// 		workouts: [{
// 			name: 'military',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'military',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'military',
// 			url: 'https://something.com'
// 		}]
// 	},
// 	biceps: {
// 		value: 'biceps',
// 		workouts: [{
// 			name: 'curl',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'curl',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'curl',
// 			url: 'https://something.com'
// 		}]
// 	},
// 	triceps: {
// 		value: 'triceps',
// 		workouts: [{
// 			name: 'dips',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'dips',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'dips',
// 			url: 'https://something.com'
// 		}]
// 	},
// 	legs: {
// 		value: 'legs',
// 		workouts: [{
// 			name: 'squat',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'squat',
// 			url: 'https://something.com'
// 		},
// 		{
// 			name: 'squat',
// 			url: 'https://something.com'
// 		}]
// 	},
// 	abs: {
// 		value: 'abs',
// 		workouts: [{
// 			name: 'Crunch',
// 			url:'https://something.com'
// 		},
// 		{
// 			name: 'Crunch',
// 			url:'https://something.com'
// 		},
// 		{
// 			name: 'Crunch',
// 			url:'https://something.com'
// 		}
// 		]
// 	},
// 	cardio: {
// 		value: 'cardio',
// 		workouts: [{
// 			name: 'treadmill sprints',
// 			url:'https://something.com'
// 		},
// 		{
// 			name: 'treadmill sprints',
// 			url:'https://something.com'
// 		},
// 		{
// 			name: 'treadmill sprints',
// 			url:'https://something.com'
// 		}
// 		]
// 	}
// };

export const workoutData = [
	{
		name: 'bench',
		value: 'chest',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'incline',
		value: 'chest',
		url: 'https://good.com',
		id: uuid()
	},
	{
		name: 'decline',
		value: 'chest',
		url: 'https://foot.com',
		id: uuid()
	},
	{
		name: 'dumbell flies',
		value: 'chest',
		url: 'https://rat.com',
		id: uuid()
	},
	{
		name: 'cable flies',
		value: 'chest',
		url: 'https://fat.com',
		id: uuid()
	},
	{
		name: 'incline cable flies',
		value: 'chest',
		url: 'https://sat.com',
		id: uuid()
	},
	{
		name: 'decline cable flies',
		value: 'chest',
		url: 'https://dat.com',
		id: uuid()
	},
	{
		name: 'push ups',
		value: 'chest',
		url: 'https://qwe.com',
		id: uuid()
	},
	{
		name: 'triangle pushps',
		value: 'chest',
		url: 'https://ds.com',
		id: uuid()
	},
	{
		name: 'inclined bench',
		value: 'chest',
		url: 'https://fd.com',
		id: uuid()
	},
	{
		name: 'pulldown',
		value: 'back',
		url: 'https://fgv.com',
		id: uuid()
	},
	{
		name: 'bent over row',
		value: 'back',
		url: 'https://re.com',
		id: uuid()
	},
	{
		name: 'face-pull',
		value: 'back',
		url: 'https://gfd.com',
		id: uuid()
	},
	{
		name: 'Deadlifts',
		value: 'back',
		url: 'https://fdfd.com',
		id: uuid()
	},
	{
		name: 'Dumbell rows',
		value: 'back',
		url: 'https://bvc.com',
		id: uuid()
	},
	{
		name: 'Suitcase rows',
		value: 'back',
		url: 'https://tre.com',
		id: uuid()
	},
	{
		name: 'Good mornings',
		value: 'back',
		url: 'https://hgfd.com',
		id: uuid()
	},
	{
		name: 'wide-grip pulldown',
		value: 'back',
		url: 'https://hgfd.com',
		id: uuid()
	},
	{
		name: 'inward grip pull downs',
		value: 'back',
		url: 'https://hgfd.com',
		id: uuid()
	},
	{
		name: 'hammergrip pull-up',
		value: 'back',
		url: 'https://hgfd.com',
		id: uuid()
	},
	{
		name: 'military',
		value: 'shoulders',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'military',
		value: 'shoulders',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'military',
		value: 'shoulders',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'curl',
		value: 'biceps',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'curl',
		value: 'biceps',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'curl',
		value: 'biceps',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'dips',
		value: 'triceps',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'dips',
		value: 'triceps',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'dips',
		value: 'triceps',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'squat',
		value: 'legs',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'squat',
		value: 'legs',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'squat',
		value: 'legs',
		url: 'https://something.com',
		id: uuid()
	},
	{
		name: 'Crunch',
		value: 'abs',
		url:'https://something.com',
		id: uuid()
	},
	{
		name: 'Crunch',
		value: 'abs',
		url:'https://something.com',
		id: uuid()
	},
	{
		name: 'Crunch',
		value: 'abs',
		url:'https://something.com',
		id: uuid()
	},
	{
		name: 'treadmill sprints',
		value: 'cardio',
		url:'https://something.com',
		id: uuid()
	},
	{
		name: 'treadmill sprints',
		value: 'cardio',
		url:'https://something.com',
		id: uuid()
	},
	{
		name: 'treadmill sprints',
		value: 'cardio',
		url:'https://something.com',
		id: uuid()
	}

];

const WorkoutContext = React.createContext(workoutData);

export { WorkoutContext as default}