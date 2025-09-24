import React, { useState } from "react";    

export default function TodoApp() {
  return (
    <div className="TodoApp">
      Todo Management Application
      <LoginComponent />
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState('in28minutes');
  const [password, setPassword] = useState('dummy');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function handleSubmit() {
    if (username === 'in28minutes' && password === 'dummy') {
      console.log('Successful');
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
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
