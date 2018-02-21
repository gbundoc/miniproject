import React from 'react';
import PropTypes from 'prop-types';
//import {Form, Button, Message } from "semantic-ui-react";
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component {
    state = {
        data:{
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    //Event Handler for text fields
    onChange = e => 
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = () => {
        
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        
        //Get Data from fields
        if(Object.keys(errors).length === 0){
            this.setState({loading: true });
            this.props
                .submit(this.state.data)
                .catch(err => this.setState({errors: err.response.data.errors, loading: false}));
        }
    }

    validate = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if(!data.password) errors.password = "Can't be blank";
        return errors;
    }

    render () {
        const { data, errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                { errors.global && 
                    <div class="alert alert-danger" role="alert">
                     {errors.global}
                   </div>}
                <div className="form-group" error={!!errors.email}>
                    <label>Email</label>
                    <input className="form-control"
                            type="email"
                            id="email" 
                            name="email" 
                            placeholder="test@email.com" 
                            value={data.email}
                            onChange={this.onChange}
                        />
                        {errors.email && <InlineError text={errors.email} />}
                </div>
                <div className="form-group" error={!!errors.password}>
                    <label>Password</label>
                    <input className="form-control"
                            type="password"
                            id="password" 
                            name="password" 
                            placeholder="Make it secure" 
                            value={data.password}
                            onChange={this.onChange}
                        />
                        {errors.password && <InlineError text={errors.password}/>}
                </div>
                <button type="button" className="btn btn-primary">Login</button>
            </form>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;