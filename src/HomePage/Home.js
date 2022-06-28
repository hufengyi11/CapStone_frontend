import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import Bakery from './ItemList/Bakery'

export default function Home() {
    return (
        <>
            <Navigation />
            <Bakery />
            
            <Footer />
        </>
    )
}
