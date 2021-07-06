import React, { useContext, useEffect, useState } from 'react';
import './Contant.css';
import data from '../data/data.json'
import Containbox from '../Containbox/Containbox';
import { Link, useParams } from 'react-router-dom';
import { QuantityContext } from '../../../App';
import { getDatabaseCart } from '../databaseManager/databaseManager';

const Contant = () => {
const {foodid} = useParams();
const [count, setCount] = useContext(QuantityContext);

    const [item, setItem] = useState([]);
    console.log(item);
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
            <button className="btn btn-danger" onClick={() =>hendleClick("brackfast")}>Brackfast</button>
            <button className="btn btn-success" onClick={() =>hendleClick("lunch")}>Lunch</button>
            <button className="btn btn-dark" onClick={() =>hendleClick("dinner")}> Dinner</button>
            </div>
            {
                 item.map(singleItem => <Containbox  item={singleItem}></Containbox>)
            }
        <div>
        <Link to="/chackout">
           <button className="btn btn-warning mt-3" disabled={count<0} style={{
                position:'absolute',
                left:'50%',}
                }>Chackout Your Food</button> </Link>      
        </div>  
        </div>
    );
};

export default Contant;