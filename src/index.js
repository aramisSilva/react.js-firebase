import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Router>
        <Switch>
            <Route  path="/dashboard" element={Dashboard}  />
            <Route  path="/register" element={SignUp}/>
            <Route  path="/" element={SignIn}/>
        </Switch>
    </Router>
  //</React.StrictMode>
);


