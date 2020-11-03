import React, { useState } from 'react';
import './Contant.css';
import data from '../data/data.json'
import Containbox from '../Containbox/Containbox';
import { Link } from 'react-router-dom';

const Contant = () => {
//   const [defultFood, setDefultFodd] = useState([]);
//   console.log(defultFood);
    
//     const food = data.filter(item => item.catagory === "lunch");
//     setDefultFodd(food);


    const [item, setItem] = useState([]);
    const hendleClick = foodName =>{
        const findCatagory = data.filter(item => item.catagory === foodName);
        setItem (findCatagory);
    }
    return (
        <div>
            <div className='manubtn'>
            <Link to="/contant"><button onClick={() =>hendleClick("brackfast")}>Brackfast</button></Link>
            <Link to="/contant"><button onClick={() =>hendleClick("lunch")}>Lunch</button></Link>
            <Link to="/contant"><button onClick={() =>hendleClick("dinner")}> Dinner</button></Link>
            </div>
            {
                 item.map(singleItem => <Containbox  item={singleItem}></Containbox>)
            }
        
        </div>
    );
};

export default Contant;