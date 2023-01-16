import React,{useState,useRef} from 'react';
import BlackLogo from '../../Assets/adobe_logo_black.svg';
import {Link,useNavigate} from 'react-router-dom'
import { auth } from '../../Firebase/Config';
import {signInWithEmailAndPassword} from 'firebase/auth'

function Login() {

  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('');
  let [isFill,setIsFill]=useState(false);
  let [emailError,setEmailError]=useState('');
  let [passwordError,setErrorPassword]=useState('');
  let passwordRef=useRef();
  let emailRef=useRef();
  let navigate=useNavigate();
  


  let UserLogin=()=>{
    if(email.length<2 || password.length<2){
      setIsFill(true)
    }else{
      setIsFill(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;        
        navigate('/home');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;              
        if(errorCode==='auth/invalid-email'){
          setEmailError(errorCode);
          setEmail('')
          emailRef.current.value='';
        }if(errorCode==='auth/wrong-password' || errorCode==='auth/too-many-requests'){
          setErrorPassword(errorCode);
          setPassword('')
          passwordRef.current.value='';
        }if(errorCode==="auth/user-not-found"){     
          setIsFill(true)     
          setEmailError(errorCode);
          setErrorPassword(errorCode);
          setPassword('')
          setEmail('');
          passwordRef.current.value='';
          emailRef.current.value='';
        }
      });

    }
  }  


  return (
      <div data-aos="flip-left" data-aos-duration="1500" className="content h-full flex flex-col justify-start items-start w-full lg:w-1/2 2xl:w-1/3 md:bg-white md:p-12 md:rounded-lg lg:py-5 xl:py-12">
        <div className="logo h-[40px] block lg:hidden">
            <img src={BlackLogo} alt="" />
        </div>
        <div className="heading">
            <h1 className='mb-2 text-[2rem] font-semibold font-roboto lg:text-2xl xl:text-[2rem]'>Sign in</h1>
            <p className='mb-5 font-semibold'>New user? <Link to="/signup" className='text-blue-600'>Create an account</Link></p>
        </div>
        <div className='input-sec my-5 w-full lg:my-2 xl:my-5'>
            <label className='block text-xs my-2 ' htmlFor="">Email</label>
            <input ref={emailRef} className='block w-full mb-5 bg-transparent border-b-2 border-blue-600 focus:outline-none placeholder:text-red-600 placeholder:text-sm' placeholder={`${isFill===true && email.length<2 ? [`${emailError.length<2 ? 'Enter your email !' : 'Invalid Email'}`] : ''}`} type="text" onInput={(e)=>{setEmail(e.target.value)}} />
            <label className='block text-xs my-2' htmlFor="">Password</label>        
            <input ref={passwordRef} className='block w-full  bg-transparent border-b-2 border-blue-600 focus:outline-none placeholder:text-red-600 placeholder:text-sm' placeholder={`${isFill===true && password.length<2 ? [`${passwordError.length<2 ? 'Please enter password !' : 'Invalid Password'}`] : ''}`} type="text" onInput={(e)=>{setPassword(e.target.value)}}/>    
        </div>
        <div className="submit-button mb-5 text-end w-full">
            <button className='bg-blue-600 px-4 py-1 rounded-full text-white font-semibold' onClick={UserLogin}>Continue</button>
        </div>
        <h1 className='text-center w-full my-5'>Or</h1>
        <div className="different-account-sec my-2 w-full">
            <div className="google-sign my-5 xl:my-8 w-full flex justify-center border-2 border-[rgba(0,0,0,.7)] rounded-full py-3">
                <a href="https://accounts.google.com/Login"><i className="fa-brands fa-google mr-4"></i>Continue with Google</a>
            </div>
            <div className="facebook-sign my-5 xl:my-8 w-full flex justify-center border-2 border-blue-600 bg-blue-600 rounded-full py-3 text-white">
                <a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjczNjgwMjgwLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"><i className="fa-brands fa-facebook mr-4"></i> Continue with Facebook</a>
            </div>
        </div>
      </div>
  )
}

export default Login
