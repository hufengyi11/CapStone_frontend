import React from 'react'
import Basket from './Basket/Basket'
import SearchBar from './SearchBar/SearchBar'
import SignIn from './SignIn/SignIn'
import './Header.css'
import { ReactComponent as Logo } from './logo.svg';

export default function Header() {
    return (
        <div className='Header'>
            <Logo />
            <SearchBar />
            <Basket />
            <SignIn />
        </div>
    )
}
