import React, { useContext, useEffect, useState } from 'react';
import './Contant.css';
import data from '../data/data.json'
import Containbox from '../Containbox/Containbox';
import { Link, useParams } from 'react-router-dom';
import { QuantityContext } from '../../../App';

const Contant = () => {
//   const [defultFood, setDefultFodd] = useState([]);
//   console.log(defultFood);
    
//     const food = data.filter(item => item.catagory === "lunch");
//     setDefultFodd(food);
const {foodid} = useParams();
const [count, setCount] = useContext(QuantityContext);

    const [item, setItem] = useState([]);
    useEffect(()=>{
        const findCatagory = data.filter(item => item.catagory === 'brackfast')
        setItem(findCatagory);
    }, [])
    const hendleClick = foodName =>{
        const findCatagory = data.filter(item => item.catagory === foodName);
        setItem (findCatagory);
    }
    return (
        <div>
            <div className='manubtn'>
            <button onClick={() =>hendleClick("brackfast")}>Brackfast</button>
            <button onClick={() =>hendleClick("lunch")}>Lunch</button>
            <button onClick={() =>hendleClick("dinner")}> Dinner</button>
            </div>
            {
                 item.map(singleItem => <Containbox  item={singleItem}></Containbox>)
            }
        <div>
        <Link to="/chackout/foodid">
           <button disabled={!count} style={{
                position:'absolute',
                left:'50%',}
                }>Chackout Your Food</button> </Link>      
        </div>  
        </div>
    );
};

export default Contant;