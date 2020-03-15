import React, { Component } from 'react'
import './SignIn.style.scss'
import Button1 from '../reusable/button/Button1'
import { auth } from '../../firebase/firebase.utils'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitted')
    // console.log(e)
    try {
      auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{this.setState({
        email: '',
        password: ''
      })});
    } catch (err) { this.setState({ err }) }
  }

  handleChange = (e) => {
    console.log(" ------ change:")
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return (
      <form className='sign-in' onSubmit={this.handleSubmit}>
        <p>LOG IN <br/> with your email and password...</p>
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
          type='password'
          placeholder='password...'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <Button1 type='submit'> Log in </Button1>
        {!this.state.err ? <p> &nbsp; </p> : <p style={{color: 'red', transition: 'all 0.3s'}}> {this.state.err.message}</p>}


        {/* <input type='submit' value='submit now'/> */}

        {/* <div className='submit-wrapper'> */}
        {/* <MiroMouseEntryOverlay imageUrl={''}></MiroMouseEntryOverlay> */}
        {/* </div> */}


      </form>
    )
  }
}

export default SignIn
