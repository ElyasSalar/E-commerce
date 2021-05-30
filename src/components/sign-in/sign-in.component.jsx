import React from 'react';
import './sign-in.style.css';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventdefault();
        console.log(event);
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='Email'
                    required />
                    
                    <FormInput
                    type="password"
                    name='password'
                    handleChange={this.handleChange}
                    value={this.state.password}
                    label='Password'
                    required />
                    <div className='sign-in-buttons'>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;