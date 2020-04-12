import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';


const Register = (props) => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2){
            props.setAlert('Passwords do not match', 'danger');
        } else{
            console.log(formData);
        }
    };
    return <Fragment>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form onSubmit={e => onSubmit(e)} className="form" action="create-profile.html">
            <div className="form-group">
                <input 
                type="text" 
                placeholder="Name"
                 name="name" 
                 value={name}
                 onChange={e => onChange(e)}
                 required />
            </div>
            <div className="form-group">
                <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={e => onChange(e)}
                name="email" 
                required/>
                <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small>
            </div>
            <div className="form-group">
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => onChange(e)}
                name="password"
                minLength="6"
            />
            </div>
            <div className="form-group">
            <input
                type="password"
                placeholder="Confirm Password"
                value={password2}
                onChange={e => onChange(e)}
                name="password2"
                minLength="6"
            />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
            Already have an account? <Link to="/register">Sign Up</Link>
        </p>
    </Fragment>
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);