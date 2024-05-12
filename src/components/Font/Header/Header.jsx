import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import rasm1 from '../../../assets/img/logo.png'
import rasm2 from '../../../assets/img/sor.png'
import rasm3 from '../../../assets/img/Logout.png'


const Header = ({cardItem}) => {
    return (
        <header className="header container">
            <div>
                <h1>
                    <Link to={'/'} className='logo'>
                      <img src={rasm1} alt="" />
                    </Link>
                </h1>
            </div>

        <div className="header_top">
         <div className="header_shop">
         <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cart">Shop</Link>
            </li>
            <li>
                    <a href="#">Plant Care</a>
            </li>
            <li>
               <a href="#">Blogs</a>
            </li>
         </div>
        </div>

            <div className="header_links">
            <ul>
                    <li>
                        <div className="input_all">
                        <div className="input">
                            <input type="text" name="" id=""  placeholder='Search....'/>
                        </div >
                        <div className="input_row">
                        <a href=""><img src={rasm2} alt="" /></a>
                        </div >
                        </div>
                
                    </li>
                </ul>
                <ul>
                    <li>
                    <Link to={'/cart'} className='cart'>
                    < FiShoppingCart />
                           <span  className='span'>{cardItem.lenght === 0 ? "" : cardItem.length}</span>
                        </Link>
                      
                    </li>
                </ul>
                <ul>
                    <li>
                  <div className="img">
                    <Link to={'/signup'}>
                    <div className="logo_img">
                        <img src={rasm3} alt="" />
                    </div>
                    <div className="logo_img">
                    <p>Login</p>
                    </div>
                    </Link>
                  </div>

                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
