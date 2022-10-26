import React, {useState} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import classes from '../styles/Sign.module.css'

function Sign() {
    const [loginIsVisible, setLoginIsVisible] = useState(true)
    const handleShowSignIn= () => {
        setLoginIsVisible(true)
    }
    const handleShowSignUp= () => {
        setLoginIsVisible(false)
    }
  return (
    <div className={classes.signHeader}>
        <div className={classes.Btns}>
            <button 
                className={`${classes.Btn} ${loginIsVisible && classes.activeBtn}`} 
                onClick={handleShowSignIn}
            >
                Sign in
            </button>
            <button 
                className={`${classes.Btn} ${!loginIsVisible && classes.activeBtn}`} 
                onClick={handleShowSignUp}
            >
                Sign Up
            </button>
        </div>
        {loginIsVisible ? <SignIn /> : <SignUp />}
    </div>
  )
}

export default Sign