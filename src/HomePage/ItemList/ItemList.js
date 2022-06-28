import React from 'react'
import './ItemList.css'
import Vegetable from './Vegetable'
import Wellbeing from './Wellbeing'
import Fruits from './Fruits'
import Drinks from './Drinks.js'
import Dairy from './Dairy.js'
import Toiletries from './Toiletries'
import Bakery from './Bakery.js'
import Meat from './Meat'

export default function ItemList() {
  return (
    <div>
      <Fruits />
      <Vegetable />
      <Wellbeing />
      <Drinks />
      <Dairy />
      <Toiletries />
      <Bakery />
      <Meat />
    </div>
  )
}
