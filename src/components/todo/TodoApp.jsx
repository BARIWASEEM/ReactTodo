import React, { useState } from "react";    
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<LoginComponent />} />
          <Route path="/Login" element={<LoginComponent />} />
          
             // In your routes
          <Route path='/welcome/:username' element={<WelcomeComponent />} />

          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );


}

function LoginComponent() {
  const [username, setUsername] = useState('in28minutes');
  const [password, setPassword] = useState('dummy');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
const navigate = useNavigate();



  function handleSubmit() {
    if (username === 'in28minutes' && password === 'dummy') {
      console.log('Successful');
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`); 

    } else {
      console.log('Failed');
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    }
  }

  return (
    <div className="Login">
      {showSuccessMessage && (
        <div className="successMessage">Authenticated Successful</div>
      )}
      {showErrorMessage && (
        <div className="errorMessage">Authentication Failed</div>
      )}

      <div className="LoginForm">
        <div>
          <label>Username</label>
          <input 
            type="text" 
            name="username" 
            value={username}
            onChange={e => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
        </div>
        <div>
          <button name="login" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}


function WelcomeComponent() {
  const {username} = useParams();
  console.log(username);
  return <h1>Welcome {username}!</h1>;
}


function ErrorComponent() {
  return <div>An Error Occurred. I don't know what to do! Contact support at ***-***</div>;
}