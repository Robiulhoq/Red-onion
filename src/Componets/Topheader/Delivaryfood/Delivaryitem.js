import React from 'react';
import './Delivaryitem.css'
const Delivaryitem = (props) => {
    const {title, quantity, price, img } = props.fd;
    return (
        <div>
            <div className="address-container">
                <h4>Edit Delivary address</h4>
                <br/>
               <input type="text"/> 
               <br/>
               <input type="text"/>
               <br/>
               <input type="text"/>
               <br/>
               <input type="text"/>
               <br/>
               <input type="text"/>
               <br/>
               <input type="submit" value="Save & Continue"/>
            </div>
            <div className="cart-container">
            <h3>{title}</h3>
            <p>quaintity: {quantity}</p>
            <h4>$ {price}</h4>
            <img src={img} alt=""/>
            </div>
            
        
        </div>
    );
};

export default Delivaryitem;