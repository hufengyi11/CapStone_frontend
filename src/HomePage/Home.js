import React from 'react'
import Footer from '../Footer/Footer';
import Bakery from '../HomePage/Bakery';
import Dairy from '../HomePage/Dairy.js';
import Drinks from '../HomePage/Drinks.js';
import Fruits from '../HomePage/Fruits.js';
import Meat from '../HomePage/Meat';
import Toiletries from '../HomePage/Toiletries';
import Vegetable from '../HomePage/Vegetable';
import Wellbeing from '../HomePage/Wellbeing';


export default function Home() {
    return (
        <>
            <div className='ItemDisplay'></div>
            <Vegetable />
            <Bakery />
            <Drinks />
            <Dairy />
            <Fruits />
            <Meat />
            <Toiletries />
            {/* <Wellbeing /> */}
            <Footer />
        </>

    )
}
