import React, { useRef } from 'react'
import './SignupScreen.css'
import { auth } from '../firebase'

function SignupScreen() {
    const emailRef = useRef(null)
    const pwdRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(emailRef.current.value, pwdRef.current.value).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.messagee)
        })
    }
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(emailRef.current.value, pwdRef.current.value).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.messagee)
        })
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input type='email' placeholder='Email' ref={emailRef} />
                <input type='password' placeholder='Password' ref={pwdRef} />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4><span className='signupScreen__gray'>New to Choof ?</span><span className='signupScreen__link' onClick={register}> Sign up now.</span></h4>
            </form>
        </div>
    )
}

export default SignupScreen