import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';

const Routers = ({productEtims, 
    cardItem, 
    handelAdd,
    handelRemove,
    handelDelete
}) => {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Products 
            productEtims={productEtims} 
            handelAdd={handelAdd}/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/cart" 
            element={<Cart
            />} 
            
            />
            </Routes>
        </div>
    );
}

export default Routers;
