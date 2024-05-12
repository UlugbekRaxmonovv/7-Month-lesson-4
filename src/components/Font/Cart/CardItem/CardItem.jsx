import React from 'react';
import { useDispatch } from 'react-redux';
import { RiDeleteBin7Line } from "react-icons/ri";
import {incrementCardQuantity,decrementCardQuantity,removeItemFromCard,removeAllFromCardAdd} from '../../Cart/cardSlick' 
const CardItem = ({data}) => {
    const dispatch = useDispatch();

    let jami =data?.reduce((a,b) => a + (b.price * b.quantity),0)
    return (
    <>
  
  <div className='box  container'>
            
          <div className="box-row">
          <div className="hammasi    ">
                <div className="hammasi-all">
                    <p>Products</p>
                </div>
               <div className="all">
               <div className="prici">
                    <p>Price</p>
                </div>
                <div className="prici">
                    <p>Quantity</p>
                </div>
                <div className="prici">
                    <p>Total</p>
                </div>
               </div>
            </div>
              { <div className='cart-Items '>
            
          
            {data.length === 0  && (
                <div className='cart-Empty' > No items are added.</div>
            )} 
            
                    <ol>
                    {data.map((item) => (
                        <li key={item?.id} className="cart-Item">
                           <tr>
                           <div  className='cart-Item-name'>
                            <img 
                            className='cart-Item-img' 
                            src={item?.img} alt=""
                             />
                            <tr>
                            <p > {item?.name}</p>
                            </tr>
                            </div>
                           </tr>
                              <tr>
                              <div className="pri">
                               {item?.price}
                               </div>
                              </tr>
                            <tr>
                            <div className="card_itim_function">
                              
                              <button 
                              onClick={() => dispatch(incrementCardQuantity(item))} 
                              className="card_etim_btn" >+
                              </button>
                           <p className='teg-p'>{item?.quantity}</p>
                              <button 
                              disabled={item?.quantity <= 1}
                               onClick={() =>dispatch(decrementCardQuantity(item))}
                                className="card_etim_remove">-
                                </button>
                              </div>
                            </tr>
                           <tr>
                           <div className="card_etim">
                           <tr>
                           <p>    {item?.quantity * item?.price} </p>
                           </tr>
                            <tr>
                            <RiDeleteBin7Line onClick={() => dispatch(removeItemFromCard(item))}  className='delet'/>
                              
                            </tr>
                            </div>
                           </tr>
                        </li>
                    ))}
                    </ol>
            
            </div> }
          </div>

          <div className="box_row">
            <p>Cart Totals</p>
            <div className="all1">
            </div>
            <h4>Coupon Apply</h4>
             <div className="hammasi_input">
             <div className="input_alt">
                    <input type="text"
                     placeholder='Enter coupon code here...' />
                </div>
                <div className="input_alt">
                    <button>Apply</button>
                </div>
             </div>
             <div className="pri_alt">
                <div className="pri_row">
                    <p>Subtotal</p>
                </div>
                <span>$2,683.00</span>
             </div>

             <div className="pri_alt">
                <div className="pri_row">
                    <p>Coupon Discount</p>
                </div>
                <span>(-) 00.00</span>
             </div>

             <div className="pri_alt">
                <div className="pri_row">
                    <p>Shiping</p>
                </div>
                <span>$16.00</span>
             </div>
             <div className="p1">
                <p>View shipping charge</p>
             </div>
             <div className="pri_alt">
                <div className="pri_row">
                    <h2>Shiping</h2>
                </div>
                <h5>${jami}</h5>
             </div>
            <div className="btn_button">
            <button>Proceed To Checkout</button>
             <button>Continue Shopping</button>
            </div>
          </div>
        
            </div>   
  
        </>
    );
}

export default CardItem;












