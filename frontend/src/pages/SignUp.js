import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Auth({setShowSignUp}) {
  const [activeTab, setActiveTab] = useState('signup');
  const [loginemail,setLoginemail]=useState("")
  const [loginpassword,setLoginpassword]=useState("")
  const [signname,setSignname]=useState("")
  const [signusername,setSignusername]=useState("")
  const [signuseremail,setSignuseremail]=useState("")
  const [signuserPassword,setSignuserPassword]=useState("")
  const Nav=useNavigate();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const handleLogin=(e)=>{
     e.preventDefault()
     axios.post('http://localhost:3000/login',{loginemail,loginpassword})
     .then(result=>{
      setShowSignUp(true);
      Nav('/')
     })
     .catch(err=>{
      console.log(err);
     })
  }
  const handleSignin=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/register',{
      signname,signusername,signuseremail,signuserPassword
    })
    .then(result=>{
      setActiveTab('login')
    })
    .catch(err=>{
      console.log('error')
    })
  }
  return (
    <div className="auth-container">
      <div className="tabs">
        <button className={`tab ${activeTab === 'login' ? 'active' : ''}`} onClick={() => handleTabClick('login')}>
          Login
        </button>
        <button className={`tab ${activeTab === 'signup' ? 'active' : ''}`} onClick={() => handleTabClick('signup')}>
          Signup
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'login' && (
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="loginEmail">Email:</label>
              <input type="email" id="loginEmail" value={loginemail} onChange={(e)=>setLoginemail(e.target.value)} name="loginEmail" required />
              <label htmlFor="loginPassword">Password:</label>
              <input type="password" id="loginPassword" value={loginpassword} onChange={(e)=>setLoginpassword(e.target.value)} name="loginPassword" required />
              <button type="submit">Login</button>
            </form>
          </div>
        )}
        {activeTab === 'signup' && (
          <div className="signup-form">
            <h2>Signup</h2>
            <form onSubmit={handleSignin}>
              <label htmlFor="signupName">Name:</label>
              <input type="text" id="signupName" value={signname} onChange={(e)=>setSignname(e.target.value)} name="signupName" required />
              <label htmlFor="signupUsername">Username:</label>
              <input type="text" id="signupUsername" value={signusername} onChange={(e)=>setSignusername(e.target.value)} name="signupUsername" required />
              <label htmlFor="signupEmail">Email:</label>
              <input type="email" id="signupEmail" value={signuseremail} onChange={(e)=>setSignuseremail(e.target.value)} name="signupEmail" required />
              <label htmlFor="signupPassword">Password:</label>
              <input type="password" id="signupPassword" value={signuserPassword} onChange={(e)=>setSignuserPassword(e.target.value)} name="signupPassword" required />
              <button type="submit">Signup</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;


 