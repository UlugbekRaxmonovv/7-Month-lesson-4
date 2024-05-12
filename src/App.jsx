import React, { useState } from 'react';
import Data from './components/Back/Data/Data';
import Header from './components/Font/Header/Header';
import Routers from './components/Font/Routers/Routers';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const {productEtims} =Data
  const [cardItem,SetcardItem] =useState([])




  return (
    <div>

 <Header  cardItem={cardItem}/>

      <Routers 
      productEtims={productEtims} 
      />

      <ToastContainer/>
      

    </div>
  );
}

export default App;
