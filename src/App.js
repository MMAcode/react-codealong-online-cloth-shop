// import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import CheckOutPage from './components/CheckOut/CheckOut'
import ShopPage from './pages/shopPage';
import Header from './components/Header/Header';
import HandleUserPage from './pages/handleUserPage';
import { auth, createUserProfileDocumentIfItDoesntExist } from './firebase/firebase.utils'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

//selectors
import {selectUser} from './redux/user/user.selectors'


export class App extends Component { 
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      console.log("XXXXXXXXXXXXXXX   onAuthStateChanged in app.js  fired")
      let userInfoFromDB = await createUserProfileDocumentIfItDoesntExist(user);//can receive an extra info in p2 as object
      this.props.setUser(userInfoFromDB);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkOut' component={CheckOutPage} />
          <Route path='/user' render={() => 
            this.props.user ? (<Redirect to='/'/>):( <HandleUserPage />)
          } />
        </Switch>
      </div>
    )
  }

}



//name mapDispatchToProps can be changed to anything else, but this is standard
const mapDispatchToProps = dispatch => ({
  // setUser will be f. in props and corresponds to setCurrentUser in user.actions.
  // it will take parameter userX and run  dispatch(setCurrentUser(userX))
  setUser: userX => dispatch(setCurrentUser(userX))
  // user 
})


const mapStateToProps = state => ({
  // user: state.user.currentUser
  // user: state.userReducer.currentUser
  user: selectUser(state)

})

export default connect(mapStateToProps, mapDispatchToProps)(App)



