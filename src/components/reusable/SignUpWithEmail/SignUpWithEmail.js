import React, { Component } from 'react'
import '../../SignIn/SignIn.style.scss'
import './SignUpWithEmail.style.scss'
import Button1 from '../button/Button1'
import { auth, createUserProfileDocumentIfItDoesntExist } from '../../../firebase/firebase.utils'

class SignUpWithEmail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      displayName: '',
      password: '',
      password2: '',
      passwordMatch: true
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.password !== this.state.password2 || this.state.password.length<6) {
      alert("Password needs fixing.")
    } else {

      console.log('Data received. Processing with DB...')
      // console.log(e)
      const { email, displayName, password } = this.state;
      try {
        let userInfo = await auth.createUserWithEmailAndPassword(email, password);
        createUserProfileDocumentIfItDoesntExist(userInfo.user, { displayName });
      } catch (err) {
        this.setState({ err })
      };
      
      // not needed, auto login during sign up
      // let userInfo2 = await auth.signInWithEmailAndPassword(email, password);
    }
  }

  handleChange = async (e) => {
    console.log(" ------ change:")
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.password !== this.state.password2 && this.state.password2 !== '') {
        this.setState({ passwordMatch: false })
      } else { this.setState({ passwordMatch: true }) }


    })
  }


  render() {
    return (
      <form className='sign-in' onSubmit={this.handleSubmit}>
        <p>SIGN UP <br/> with your email and password...</p>
        <input
          // required
          type='email'
          placeholder='email...'
          name='email'
          value={this.state.email}
          onChange={this.handleChange}
        />

        <input
          // required
          type='text'
          placeholder='username...'
          name='displayName'
          value={this.state.displayName}
          onChange={this.handleChange}
        />
        <input
          // required
          type='password'
          placeholder='password...'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <input
          // required
          type='password'
          placeholder='confirm password...'
          name='password2'
          value={this.state.password2}
          onChange={this.handleChange}
        />
        <Button1 type='submit'> Sign up </Button1>
        {this.state.password.length > 5 || this.state.password.length === 0 ? <p> &nbsp; </p> : <p className='alert'> At least 6 characters.</p>}
        {this.state.passwordMatch ? <p> &nbsp; </p> : <p className='alert'> Passwords don't match.</p>}
        {!this.state.err ? <p> &nbsp; </p> : <p className='alert'> {this.state.err.message}</p>}
      </form>
    )
  }
}

export default SignUpWithEmail
