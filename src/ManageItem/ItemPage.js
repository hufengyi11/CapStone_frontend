import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './addItemStyling.css'
import AddNewItem from './AddNewItem';
import RemoveItem from './RemoveItem';

const ItemPage = () => {

  return (
    <>
      <Navigation />
      <AddNewItem />
      <RemoveItem />
      <div className='padding'></div>
      <Footer />
    </>
  );
};
export default ItemPage;