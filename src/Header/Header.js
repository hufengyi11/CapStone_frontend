import React from 'react'
import Basket from './Basket/Basket'
import SearchBar from './SearchBar/SearchBar'
import SignIn from './SignIn/SignIn'
import './Header.css'

export default function Header() {
    return (
        <div className='Header'>
            <p>Logo</p>
            <SearchBar />
            <Basket />
            <SignIn />
        </div>
    )
}
