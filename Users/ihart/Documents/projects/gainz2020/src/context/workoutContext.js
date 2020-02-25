import React from 'react';

export const workoutData = {
	chest: {
		value: 'chest',
		workouts: [{
			name: 'bench',
			url: 'https://something.com'
		},
		{
			name: 'incline',
			url: 'https://something.com'
		},
		{
			name: 'decline',
			url: 'https://something.com'
		},
		{
			name: 'dumbell flies',
			url: 'https://something.com'
		},
		{
			name: 'cable flies',
			url: 'https://something.com'
		},
		{
			name: 'incline cable flies',
			url: 'https://something.com'
		},
		{
			name: 'decline cable flies',
			url: 'https://something.com'
		},
		{
			name: 'push ups',
			url: 'https://something.com'
		},
		{
			name: 'triangle pushps',
			url: 'https://something.com'
		},
		{
			name: 'inclined bench',
			url: 'https://something.com'
		}]
	},
	back: {
		value: 'back',
		workouts: [{
			name: 'pulldown',
			url: 'https://something.com'
		},
		{
			name: 'bent over row',
			url: 'https://something.com'
		},
		{
			name: 'face-pull',
			url: 'https://something.com'
		},
		{
			name: 'Deadlifts',
			url: 'https://something.com'
		},
		{
			name: 'Dumbell rows',
			url: 'https://something.com'
		},
		{
			name: 'Suitcase rows',
			url: 'https://something.com'
		},
		{
			name: 'Good mornings',
			url: 'https://something.com'
		},
		{
			name: 'wide-grip pulldown',
			url: 'https://something.com'
		},
		{
			name: 'inward grip pull downs',
			url: 'https://something.com'
		},
		{
			name: 'hammergrip pull-up',
			url: 'https://something.com'
		}]
	},
	shoulders: {
		value: 'shoulders',
		workouts: [{
			name: 'military',
			url: 'https://something.com'
		},
		{
			name: 'military',
			url: 'https://something.com'
		},
		{
			name: 'military',
			url: 'https://something.com'
		}]
	},
	biceps: {
		value: 'biceps',
		workouts: [{
			name: 'curl',
			url: 'https://something.com'
		},
		{
			name: 'curl',
			url: 'https://something.com'
		},
		{
			name: 'curl',
			url: 'https://something.com'
		}]
	},
	triceps: {
		value: 'triceps',
		workouts: [{
			name: 'dips',
			url: 'https://something.com'
		},
		{
			name: 'dips',
			url: 'https://something.com'
		},
		{
			name: 'dips',
			url: 'https://something.com'
		}]
	},
	legs: {
		value: 'legs',
		workouts: [{
			name: 'squat',
			url: 'https://something.com'
		},
		{
			name: 'squat',
			url: 'https://something.com'
		},
		{
			name: 'squat',
			url: 'https://something.com'
		}]
	},
	abs: {
		value: 'abs',
		workouts: [{
			name: 'Crunch',
			url:'https://something.com'
		},
		{
			name: 'Crunch',
			url:'https://something.com'
		},
		{
			name: 'Crunch',
			url:'https://something.com'
		}
		]
	},
	cardio: {
		value: 'cardio',
		workouts: [{
			name: 'treadmill sprints',
			url:'https://something.com'
		},
		{
			name: 'treadmill sprints',
			url:'https://something.com'
		},
		{
			name: 'treadmill sprints',
			url:'https://something.com'
		}
		]
	}
};

const WorkoutContext = React.createContext(workoutData);

export { WorkoutContext as default}