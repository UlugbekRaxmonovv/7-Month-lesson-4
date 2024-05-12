import React from 'react';
import './Main.css'
import rasm1 from '../../assets/img/01.png'
import rasm2 from '../../assets/img/02.png'
const Main = () => {
    return (
        <div className='container'>
            <div className="main">
                <div className="main-all">
                    <p>Welcome to GreenShop</p>
                    <h1 className='teg'>Let’s Make a
Better <span> Planet</span></h1>
     <h5>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</h5>

     <div className="button">
     SHOP NOW
     </div>
                </div>
                <div className="main all">
                    <div className="main-all_row">
                        <img src={rasm1} alt="" />
                        <div className="img_02">
                            <img src={rasm2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
    );
}

export default Main;
