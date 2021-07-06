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
        

        <div className="food-container container pt-5 mt-3">
            <Link style={style} to={"/foodinfo/"+id}>
            <div className="d-flex justify-content-center">
            <img src={img} alt=""/>
            </div>
            <h4 className="text-center">{title}</h4>
            <p className="text-center">{description}</p>
            </Link>
            <h6 className="text-center">Price$ {price}</h6>
            
        </div>
    )

    
        
};

export default Containbox;