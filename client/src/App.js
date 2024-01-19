import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';


const code = new URLSearchParams(window.location.search).get('code'); 

function App() {
  const [token, setToken] = useState(""); 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard token={token} setToken={setToken}/>}/>
        {/* <PrivateRoute> 
            <Dashboard/>
        </PrivateRoute>   */}
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
