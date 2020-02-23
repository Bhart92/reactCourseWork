import React from 'react';
import Form from './Form';
class ContactPage extends React.Component{
	render(){
		return (
			<div className='section-container contact-overflow'>
			<h1 className='section-container--title'>Shoot me a <span className='contact-form--container--h1__span'>message!</span></h1>
			<Form />
			</div>
		);
	}
};


export default ContactPage;