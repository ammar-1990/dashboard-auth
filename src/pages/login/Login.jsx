import './Login.scss'
import { useState } from 'react'
import { signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from '../../AuthContext'
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [error ,setError] = useState(false)
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const {dispatch}=useContext(AuthContext)
  const [loading ,setLoading]=useState(false)


  const handleSubmit=(e)=>{
    e.preventDefault() ;
  setLoading(true)

  signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setLoading(false)
    const user = userCredential.user;
    dispatch({type:"LOGIN",payload:user})
    navigate('/')
  })
  .catch((error) => {
    setError(true)
    setLoading(false)
    // ..
  });
  
}
  return (
    <div className='login'>
      <form  onSubmit={handleSubmit}>

<input type="email" placeholder='Enter your e-mail' onChange={e=>{setEmail(e.target.value);setError(false)}}/>
<input type="password" placeholder='Enter your password' onChange={e=>{setPassword(e.target.value);setError(false)}}/>
<button>{loading ?'Logging in ...' :'Log in '}</button>
{error && <div className='error'>worng e-mail or password</div>}
 
 <p className='p_signing'>dont have an account? <Link to={'/signup'}><span className='signing'>sign up</span></Link></p>

      </form>
      </div>
  )
}

export default Login