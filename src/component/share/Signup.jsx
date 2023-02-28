import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Popup from './Popup'
function Signup() {
  const [pop, setPop] = useState(false)

  const popUpHandler = (value) => {
    setPop(value)

  }
  return (
    <div className='landingContainer signup'>
      <div className="auth-box">
        <div className="subheader">Signup</div>
        <form>
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
        </form>
        <div className="button-primary" onClick={()=> popUpHandler(true)}>Signup</div>
        <p>Already have account?  <Link to='/login'><span className='orange-text'>Login</span></Link></p>
      </div>

      <Popup pop={pop} popUpHandler={popUpHandler}/>
    </div>
  )
}

export default Signup
