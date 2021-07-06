import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { QuantityContext } from '../../../App';
import Contant from '../Contant/Contant';
import data from '../data/data.json';
import { addToDatabaseCart } from '../databaseManager/databaseManager';
import DelivaryCart from '../DelivaryCart/DelivaryCart';
import './Containinfo.css';


const Containinfo = () => {
    const { foodid } = useParams();
    const singleFood = data.find(singleFd => singleFd.id === foodid);

    const { title, description, img, price, id } = singleFood;

    const [count, setCount] = useContext(QuantityContext);
    const incrice = () => {
        setCount(count + 1);
    }
    const decrice = () => {
        setCount(count - 1)
    }

    const hendleAddProducts = () => {
        addToDatabaseCart(id, count);
        alert("Food add to cart")
    }

    return (

        <div className="main-container">
            <div className="button-container">
                <Contant></Contant>
            </div>
            <div className="info-container mt-5">
                <h2>{title}</h2>
                <h6>{description}</h6>
                <h3>$ {price * count}</h3>
                <p>Quantitey: {count}</p>
                <button className="btn btn-success" onClick={incrice}>Incrice</button>
                <button className="btn btn-danger" onClick={decrice}>derice</button>
                <br />
                <br />
                <br />
                <button className="btn btn-success" onClick={hendleAddProducts}>ADD</button>
                <div className="img-container d-flex">
                    <img src={img} alt="" />
                </div>
            </div>



        </div>

    );
};

export default Containinfo;