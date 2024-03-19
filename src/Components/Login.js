import React from 'react'
import Header from './Header'
import loginBackground from "../assets/loginBackgroundImg.webp"

const Login = () => {
  return (
    <div>
    <Header/>
    <div>
      <img src={loginBackground} alt='backgroundImage'/>
      </div>
    </div>
  )
}

export default Login
