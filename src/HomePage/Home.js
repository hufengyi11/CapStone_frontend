import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import Bakery from './ItemList/Bakery'
import Dairy from './ItemList/Dairy'

export default function Home() {
    return (
        <>
            <Navigation />
            <>
                <Bakery />
                <Dairy />
            </>

            <Footer />
        </>
    )
}
