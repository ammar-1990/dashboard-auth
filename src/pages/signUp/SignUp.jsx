import { useContext, useRef, useState } from 'react'
import {auth} from '../../firebase'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import './signup.scss'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { signInWithEmailAndPassword  } from "firebase/auth";



const SignUp = () => {
const [loading,setLoading]=useState(false)
const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)
    const confirm = useRef()
    const{dispatch}=useContext(AuthContext)
    const handleSubmit= async(e)=>{
        e.preventDefault()
        if(!password)
        setError(true)
if(password===confirm.current.value){
        try {
            setLoading(true)
            await createUserWithEmailAndPassword(auth, email, password);
            signInWithEmailAndPassword (auth, email, password)
            .then((userCredential) => {
              // Signed in 
              setLoading(false)
              const user = userCredential.user;
              dispatch({type:"LOGIN",payload:user})
              navigate('/')
            })
        }
        catch(err)
        {
            setLoading(false)
            setError(true)
        }
    }
     else{setError(true)}   
    }
   
  return (
    <div className='signup'>


        <form onSubmit={handleSubmit}>

            <input type="email" placeholder='Enter your e-mail' onChange={(e)=>{setEmail(e.target.value);setError(false)}}/>
            <input type="password" placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value);setError(false)}}/>
            <input type="password"  placeholder='Confirm your password' ref={confirm}/>
           {error&& <p className="error">password is not identical or email already exists</p>}  
            <button>{loading ? 'Loading ...':'Sign Up'}</button>

           <Link style={{textDecoration:'none'}} to={'/login'} ><button className="tolog">Log in</button></Link>
        </form>
    </div>
  )
}

export default SignUp