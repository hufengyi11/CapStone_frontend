import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Preferences from './preferences/Preferences';
import Login from './Login';

export default function UserLogin() {
    const [token, setToken] = useState();
    
    if(!token) {
        return <Login setToken={setToken} />
      }

    return (
        <div>
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
