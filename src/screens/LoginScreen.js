import React, { useState } from 'react'
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
  const [signIn , setSignIn] = useState(false);

    return (
        <div className="loginScreen"> 
        <div className="loginScreen__background"> 
          <img 
          className="loginScreen__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"  alt="kbackimage"/>
          <button 
          onClick={()=> setSignIn(true)}
          className="loginScreen__button">SignIn</button>
          <div className="loginScreen__gradient">
            
          </div>
        </div>
        <div className="loginScreen__body">
          {signIn? (
            <SignUpScreen />
          ):
          <>
          <h1>Unlimited Films Tv programmes and more</h1>
          <h2>Watch anywhere .Cancel at any time</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership</h3>
          <div className="loginScreen__input">
            <form>
              <input type='email' placeholder="Email Address"></input>
              <button
              onClick={()=> setSignIn(true)}
              className="loginScreen__getStarted">Get Started</button>
            </form>
          </div>
          </>
          }
         
        </div>
            
        </div>
    )
}

export default LoginScreen
