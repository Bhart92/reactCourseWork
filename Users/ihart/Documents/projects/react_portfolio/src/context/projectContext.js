import React from 'react';
const projects = [
	{
		title: 'Thai Kitchen',
		description: 'Thai Kitchen is a popular thai food restaurent located in the Downtown Riverside area',
		image: '/images/rtk.webp',
		imageStatus: false,
		imageAlt: 'Thai Kitchen Landing Page',
		url: 'https://still-inlet-43499.herokuapp.com/',
		tech: 'HTML 5 | CSS 3 | JQuery'
	},
	{
		title: 'Mint Condition Tattoo',
		description: 'Mint Condition Tattoo is a tattoo and piercing parlor located in Upland, CA',
		image: '/images/thirdEye.webp',
		imageStatus: false,
		imageAlt: 'Mint Condition Landing Page',
		url: 'https://thawing-savannah-84432.herokuapp.com/',
		tech: 'HTML 5 | CSS 3 | JQuery'
	},
	{
		title: 'Mint Condition Tattoo',
		description: 'Mint Condition Tattoo is a tattoo and piercing parlor located in Upland, CA',
		image: '/images/thirdEye.webp',
		imageStatus: false,
		imageAlt: 'Mint Condition Landing Page',
		url: 'https://thawing-savannah-84432.herokuapp.com/',
		tech: 'HTML 5 | CSS 3 | JQuery'
	},
	{
		title: 'Mint Condition Tattoo',
		description: 'Mint Condition Tattoo is a tattoo and piercing parlor located in Upland, CA',
		image: '/images/thirdEye.webp',
		imageStatus: false,
		imageAlt: 'Mint Condition Landing Page',
		url: 'https://thawing-savannah-84432.herokuapp.com/',
		tech: 'HTML 5 | CSS 3 | JQuery'
	}
];

const ProjectContext = React.createContext(projects);

export { ProjectContext as default}

