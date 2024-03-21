import React, { useState } from 'react'
import Header from './Header'
import loginBackground from "../assets/loginBackgroundImg.webp"

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
    <Header/>
    <div className='absolute'>
      <img src={loginBackground} alt='backgroundImage'/>
      </div>
      <form className='absolute p-12 bg-black bg-opacity-85 w-3/12 my-30 mx-auto right-0 left-0 text-white' >
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {isSignInForm ? (
          <></>
        ) : ( <input
        type='text'
        placeholder='Full Name'
        className='bg-black bg-opacity-10 border-solid border-2 border-white rounded-lg  p-4 my-4 w-full'
        />)}
        <input 
        type='text'
        placeholder='Email or phone number'
        className='bg-black bg-opacity-10 border-solid border-2 border-white rounded-lg  p-4 my-4 w-full' 
        />
        <input
        type='password'
        placeholder='Password'
        className='bg-black bg-opacity-10 border-solid border-2 border-white rounded-lg  p-4 my-4 w-full'
        />
        {isSignInForm ? (
          <></>
        ) : ( <input
        type='password'
        placeholder='Confirm Password'
        className='bg-black bg-opacity-10 border-solid border-2 border-white rounded-lg  p-4 my-4 w-full'
        />)}
        <button className='p-4 my-6  bg-red-800 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p onClick={toggleSignInForm} className='py-4 cursor-pointer'>{isSignInForm ? "New to Netflix? Sign up now." : "Existing User? Sign In now."}</p>
      </form>
    </div>
  )
}

export default Login

