import React, { useState } from 'react'
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
            <p>https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications#step-1-building-a-login-page</p>
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
