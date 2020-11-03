import React from 'react';
import { Link } from 'react-router-dom';
import './Containbox.css'

const Containbox = (props) => {
    const {title, img, description, price, id} = props.item;
    
    return (
        <div className='container'>
            <div className="img-box">
            <Link to={"/foodinfo/"+id}>
                <img src={img} alt=""/>
                <h3>{title}</h3>
                <p>{description}</p>
                <h5>${price}</h5>
                </Link>
            </div>
            
        </div>
    );
};

export default Containbox;