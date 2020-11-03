import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { QuantityContext } from '../../../App';
import Contant from '../Contant/Contant';
import data from '../data/data.json';
import { addToDatabaseCart } from '../databaseManager/databaseManager';
import DelivaryCart from '../DelivaryCart/DelivaryCart';
import './Containinfo.css';


const Containinfo = () => {
    const {foodid} = useParams();
    const singleFood = data.find(singleFd => singleFd.id === foodid);
    
    const {title, description, img, price, id} = singleFood;
    
    const [count, setCount] = useContext(QuantityContext);
    const incrice = () =>{
      setCount(count + 1);
    }
    const decrice = () =>{
        setCount(count - 1)
    }

    const hendleAddProducts = () =>{
        addToDatabaseCart(id, count);
    }
    
    return (
      
        <div className="main-container">
            <div className="button-container">
            <Contant></Contant>
            </div>
            <div className="info-container">
                    <h2>{title}</h2>
                    <h6>{description}</h6>
                    <h3>$ {price * count}</h3>
                    <p>Quantitey: {count}</p>
                    <button onClick={incrice}>Incrice</button>
                    <button onClick={decrice}>derice</button>
                    <br/>
                    <br/>
                    <br/>
                    <button onClick={hendleAddProducts}>ADD</button>
            </div>
            <div className="img-container">
                    <img src={img} alt=""/>
            </div>
           
            
        </div>
    
    );
};

export default Containinfo;