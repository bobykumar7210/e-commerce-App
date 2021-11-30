import React, { Component } from 'react';
import './signin.component.styles.scss'
import { signInWithGoogle } from '../../firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignIn extends Component {
     constructor(props){
         super(); 
         this.state={
             email:'',
             password:''
         }
     }
     handleSubmit=event=>{
         event.preventDefault();
         console.log(this.state);
        this.setState({email:"",password:""})
     }
     handleChange=event=>{
         const {name,value}=event.target;
         this.setState({[name]:value})
     }
     render(){
         return (
         <div className='sign-in'>
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>
 
         <form onSubmit={this.handleSubmit}>
           <FormInput
             name='email'
             type='email'
             handleChange={this.handleChange}
             value={this.state.email}
             label='email'
             required
           />
           <FormInput
             name='password'
             type='password'
             value={this.state.password}                                                                             
             handleChange={this.handleChange}
             label='password'
             required
           />
           <CustomButton type='submit'> Sign in </CustomButton>
           <CustomButton onClick={signInWithGoogle} > Sign in </CustomButton>
         </form>
       </div>
       );
     }
}

export default SignIn;