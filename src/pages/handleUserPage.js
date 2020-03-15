import React from 'react'
import './handleUserPage.style.scss'
import SignInWithEmail from '../components/SignIn/SignIn'
import { signInWithGoogle } from '../firebase/firebase.utils'
import Button1 from '../components/reusable/button/Button1'
import SignUpWithEmail from '../components/reusable/SignUpWithEmail/SignUpWithEmail'


function HandleUser() {
  return (
    <div className='handle-user'>
       <Button1 onClick={signInWithGoogle}>Log-in with google</Button1>
      <SignInWithEmail />
      <SignUpWithEmail />
      
     
      
    </div>
  )
}

export default HandleUser
