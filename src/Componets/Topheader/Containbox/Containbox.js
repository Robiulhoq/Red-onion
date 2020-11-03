import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Containbox.css'

const Containbox = (props) => {
    
    const {title, img, description, price, id} = props.item;
    const style = {
        textDecoration: "none",
        color: "black"
    }
    return ( 
        

        <div className="food-container">
            <Link style={style} to={"/foodinfo/"+id}>
            <img src={img} alt=""/>
            <h4>{title}</h4>
            <p>{description}</p>
            </Link>
            <h6>Price$ {price}</h6>
            
        </div>
    )

    
        
};

export default Containbox;