import React from 'react'
import Navigation from '../Navigation/Navigation'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Home() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigation />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    )
}
