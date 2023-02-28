import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='landingContainer login'>
      <div className="auth-box">
        <div className="subheader">Login</div>
        <form>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
        </form>
        <Link to='/student'><div className="button-primary"> Login </div></Link>
        <p>Don't have account yet? <Link to='/signup'><span className='orange-text'>Sign up</span></Link></p>
      </div>
    </div>
  )
}

export default Login
