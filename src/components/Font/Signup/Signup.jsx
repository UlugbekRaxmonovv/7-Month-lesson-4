import React,{useState} from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import rasm1 from '../../../assets/img/ayla.png'
import rasm2 from '../../../assets/img/rasm1.png'
import rasm3 from '../../../assets/img/rasm3.png'
import rasm4 from '../../../assets/img/rasm5.png'
import rasm5 from '../../../assets/img/paymi.png'
import rasm6 from '../../../assets/img/ayla1.png'

const Signup = () => {
    const [name,setName] =useState('')
    const [raido,setRadio] =useState('')
    const [adrest,setAdrest] =useState('')
    const [city,setCity] =useState('')
    const [gmail,setGmail] =useState('')
    const [phone,setPhone] =useState('')
    const [password,setPassword] =useState('')
    const [confirmPassword,setConfirmPassword] =useState('')
    const [error,setError] =useState('')
    const [surname,setSurname] =useState('')



    const submit =(e) => {
        e.preventDefault()
         const users={
            name,
            surname,
            adrest,
            city,
            gmail,
            phone,
            password,
            confirmPassword,
            raido,
            error

         }
         console.log(users);
         setError('')
         setAdrest('')
         setCity('')
         setGmail('')
         setPhone('')
         setPassword('')
         setConfirmPassword('')
         setRadio('')
         setName('')
         setSurname('')
    }
    return (
       <>
        <div className='signup container'>
            <div className="signup-all">
            <Link to={'/'}>Home</Link> /
            </div>
            <div className="signup-all">
            <Link to={'/cart'}>Shop</Link> /
            </div>
            <div className="signup-all">
            <Link to={'/signup'}>Checkout</Link>
            </div>
        </div>
       <div className="signup_row container">
        <div className="signup_all">
        <div className="p">
           <p>First Name </p>
           </div>
            <div className="signup_input">
           <input type="text" 
           required
           value={name}
           onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="p">
           <p>Country / Region </p>
           </div>
            <div className="signup_input">
           <input type="text"
           value={raido}
           required
           onChange={(e) => setRadio(e.target.value)}
           placeholder='Select a country / region' />
            </div>

            <div className="p">
           <p>Street Address </p>
           </div>
            <div className="signup_input">
           <input
            value={adrest}
            required
            onChange={(e) => setAdrest(e.target.value)}
            type="text" placeholder='House number and street name' />
            </div>

            <div className="p">
           <p>State </p>
           </div>
            <div className="signup_input">
            
           <input
           value={city}
           required
           onChange={(e) => setCity(e.target.value)}
            type="text" placeholder='Select a state' />
            </div>

            <div className="p">
           <p>Email address</p>
           </div>
            <div className="signup_input">
           <input type="gmail"
           value={gmail} 
            required
           onChange={(e) => setGmail(e.target.value)}
           />
            </div>

            <div className="all5">
            <div className="all4">
                    <img src={rasm1} alt="" />
                </div>
                <div className="all4">
                   <p>Ship to a different address?</p>
                </div>
            </div>
            <h4>Order notes (optional)</h4>

            <textarea name="" id="" cols="30" rows="10"></textarea>

        </div>



        <div className="signup_all">
        <div className="p">
           <p>Last Name </p>
           </div>
            <div className="signup_input">
           <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text" 
            required/>
            </div>

            <div className="p">
           <p>Town / City </p>
           </div>
           <div className="signup_input">
           <input
           value={error}
           required
           onChange={(e) => setError(e.target.value)}
           type="text" placeholder='Select a country / region' />
            </div>


            <div className="signup_inputa">
           <input
           value={confirmPassword}
           required
           onChange={(e) => setConfirmPassword(e.target.value)}
           type="text" placeholder='Appartment, suite, unit, etc. (optional)' />
            </div>

            <div className="p">
           <p>Zip </p>
           </div>
            <div className="signup_input">
           <input 
             value={password}
             required
             onChange={(e) => setPassword(e.target.value)}
              type="password" placeholder='House number and street name' />
            </div>

            <div className="p">
           <p>Phone Number </p>
           </div>
            <div className="signup_input">
                <select name="" id="">
                <option value="">+998</option>
                </select>
           <input type="tel"  
           value={phone}
           required
           onChange={(e) => setPhone(e.target.value)}
           />
            </div>
        </div>



        <div className="signup_all">
            
            <div className="column_all">
                <div className="column_all_row">
                    <p>Products</p>
                </div>
                <p>Subtotal</p>
            </div>


       <ul>
       <li className='link_all'>
        <div className="item_link">
            <img src={rasm2} alt="" />
         </div>
         <div className="item_link">
            <p>Barberton Daisy</p>
            <span>SKU: 1995751877966</span>
         </div>
         <div className="item_link">
            <h5>(x 2)</h5>
         </div>
         <div className="item_link">
          <h6>$238.00</h6>
         </div>
        </li>
        <li className='link_all'>
        <div className="item_link">
            <img src={rasm4} alt="" />
         </div>
         <div className="item_link">
            <p>Blushing Bromeliad</p>
            <span>SKU: 1995751877966</span>
         </div>
         <div className="item_link">
            <h5>(x 6)</h5>
         </div>
         <div className="item_link">
          <h6>$834.00</h6>
         </div>
        </li>
        <li className='link_all'>
        <div className="item_link">
            <img src={rasm3} alt="" />
         </div>
         <div className="item_link">
            <p>Aluminum Plant</p>
            <span>SKU: 1995751877966</span>
         </div>
         <div className="item_link">
            <h5>(x 9)</h5>
         </div>
         <div className="item_link">
          <h6>$1,611.00</h6>
         </div>
        </li>
       </ul>
     <p>Have a coupon code? <span>Click here</span></p>
       <ol>
       <li className='ol_li'>
         <div className="item_link">
            <p>Subtotal</p>
         </div>
         <div className="item_link">
            <h6>$2,683.00</h6>
         </div>
        </li>
        <li className='ol_li'>
         <div className="item_link">
            <p>Coupon Discount</p>
         </div>
         <div className="item_link">
            <h5>(-) 00.00</h5>
         </div>
        </li>
        <li className='ol_li'>
         <div className="item_link">
            <p>Shiping</p>
         </div>
         <div className="item_link">
            <h6>$16.00</h6>
         </div>
        </li>
        <span>View shipping charge</span>
       </ol>
       <div className="ol_siz">
       </div>
       <ol>
       <li className='ol_li'>
         <div className="item_link">
            <p>Subtotal</p>
         </div>
         <div className="item_link">
            <h6>$2,683.00</h6>
         </div>
        </li>
       </ol>
       <div className="payment">
       <p>Payment Method</p>
       <div className="paymi">
       <div className="paymi-all1">
            <img src={rasm1} alt="" />
        </div>
        <div className="paymi-all">
            <img src={rasm5} alt="" />
        </div>
       </div>

       <div className="paymi">
       <div className="paymi-all1">
            <img src={rasm1} alt="" />
        </div>
        <div className="paymi-all">
            <p>Dorect bank transfer</p>
        </div>
       </div>
       <div className="paymi">
       <div className="paymi-all1">
            <img src={rasm6} alt="" />
        </div>
        <div className="paymi-all">
           <p>Cash on delivery</p>
        </div>
       </div>


       <div className="button_alt_row">
        <button onClick={submit}>Place Order</button>
       </div>
   </div>  


          
        </div>
       </div>

       </>
    );
}

export default Signup;
