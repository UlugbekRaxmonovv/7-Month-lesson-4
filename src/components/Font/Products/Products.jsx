import React from 'react';
import './Products.css'
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Main from '../../Main/Main';
import {addToCard} from '../../Font/Cart/cardSlick'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
const Products = ({productEtims}) => {
    const dispatch = useDispatch()


    
    return (
        <>
        <Main/>
        <div className="products container">
            {productEtims.map(( product) =>(
                <div className="card">
                    <div  className='product'>
                        <img src={product.img} alt={product.name}  />
                        <div className="product-all">
                        <div className="product_Add">
                        <MdFavoriteBorder />
                    </div>
                    <div className="product_Add">
                  <CiShoppingCart
                   onClick={() => dispatch(addToCard(product))} />
                    </div>
                    <div className="product_Add">
                    <CiSearch />
                    </div>
                    </div>                   
                    </div>
                    <div>
                        <h3 className='product_name'>
                            {product.name}
                        </h3>
                    </div>
                    <div  className='product_price'>
                        ${product.price}
                    </div>
   
                </div>
            ))

            }
        </div>
        </>
    );
}

export default Products;
