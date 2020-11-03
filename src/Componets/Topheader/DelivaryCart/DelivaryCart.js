import React, {  useEffect, useState } from 'react';
import data from '../data/data.json';
import { QuantityContext } from '../../../App';
import { getDatabaseCart } from '../databaseManager/databaseManager';
import Delivaryitem from '../Delivaryfood/Delivaryitem';

const DelivaryCart = () => {
    
    const [food, setFood] = useState([]);
    useEffect(()=>{
            const savedCart = getDatabaseCart();
            const foodId = Object.keys(savedCart);
            const cartFood = foodId.map(  id => {
                    const singleFood = data.find(singleFood => singleFood.id === id);
                    singleFood.quantity = savedCart[id];
                    return singleFood;
            } );
            setFood(cartFood);
    },[]);

    return (
        <div>
            {
                food.map(fd => <Delivaryitem fd={fd}></Delivaryitem>)
            }
            
        </div>
    );
};

export default DelivaryCart;