import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import backgroundImg from '../../images/bannerbackground.png';
import Contant from './Contant/Contant';
import Mainheader from './Mainheader/Mainheader';
import './Toheader.css';
import { QuantityContext } from '../../App';

const Toheader = () => {
    const style = {
        width: '100%',
        height: '400px',
        marginTop: '10px'
    };
    
    return (
        <div className='topheader'>
           <img src={logo} alt=""/>
                <Link to="/login"><button className="btn">SING UP</button></Link>
                <Link to="/login"><button className="btn">LOGIN</button></Link>
             <div>
             <img style={style} src={backgroundImg} alt=""/>
            </div>   
            <div>
                
            </div>
            <div>
               
            </div>
                
        </div>
    );
};

export default Toheader;