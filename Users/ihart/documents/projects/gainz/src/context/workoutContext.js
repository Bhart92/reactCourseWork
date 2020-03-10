import React from 'react';
import uuid from 'uuid';


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