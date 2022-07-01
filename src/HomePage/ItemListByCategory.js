import React from 'react'
import Wellbeing from './Category/Wellbeing'
import Bakery from './Category/Bakery'
import Fruits from './Category/Fruits'
import Meat from './Category/Meat'
import Dairy from './Category/Dairy'
import Drinks from './Category/Drinks'
import Toiletries from './Category/Toiletries'
import Vegetables from './Category/Vegetable'


function ItemListByCategory() {
  return (
    <div>
        <Bakery/>
        <Dairy/>
        <Drinks/>
        <Fruits/>
        <Meat/>
        <Toiletries />
        <Vegetables/>
        <Wellbeing/>
    </div>
  )
}

export default ItemListByCategory