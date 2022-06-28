import React from 'react'
import Header from '../Header/Header'
import ItemList from './ItemList/ItemList'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
export default function Home() {
    return (
        <>
            <Header />
            <ItemList />
            <Navigation />
            <Footer />
        </>
    )
}
