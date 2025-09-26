import React, { useState } from "react";    
import {BrowserRouter, Routes, Route, useNavigate, useParams,Link} from 'react-router-dom'

export default function TodoApp() {
  return (
    <div className="TodoApp">
     
        <HeaderComponent />
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<LoginComponent />} />
          <Route path="/Login" element={<LoginComponent />} />
          <Route path='/welcome/:username' element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />

          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );





function HeaderComponent() {
  return (
    <header className="header">
      <h1>Todo App</h1>
  
    </header>
  );
}

function FooterComponent() {
  return (
    <footer className="footer">
      <span className="text-muted">All Rights Reserved 2024 @Mohd Asif</span>
    </footer>
  );
}
}

function LogoutComponent() {
  return (<div>You are logged out successfully.</div>);
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
  return (
    <>
      <h1>Welcome {username}!</h1>
      <Link to="/todos">Go to Todos</Link>
    </>
  );

}


function ErrorComponent() {
  return <div>An Error Occurred. I don't know what to do! Contact support at ***-***</div>;
}


function ListTodosComponent() {
  const todos = [
    {id: 1, description: 'Learn React', completed: false, targetDate: new Date()},
    {id: 2, description: 'Learn Spring', completed: true, targetDate: new Date()},
    {id: 3, description: 'Learn Full Stack Development', completed: false, targetDate: new Date()},
    {id: 4, description: 'Learn Microservices', completed: true, targetDate: new Date()}
  ]
  return (

    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Status</th>
            <th>Target Date</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.completed ? 'Completed' : 'Pending'}</td>
              <td>{todo.targetDate.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


