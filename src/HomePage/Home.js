import React from 'react'
import Navigation from '../Navigation/Navigation'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../LogIn/Login';
import UserLogin from '../LogIn/UserLogin';


export default function Home() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigation />}>
                        <Route index element={<Home />} />
                        <Route path='/userlogin' element={<UserLogin />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    )
}
