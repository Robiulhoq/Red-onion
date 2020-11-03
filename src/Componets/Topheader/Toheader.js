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
    const [count, setCount] = useContext(QuantityContext);
    return (
        <div className='topheader'>
           <img src={logo} alt=""/>
                <Link to="/login"><button>Sing Up</button></Link>
                <Link to="/login"><button>Login</button></Link>
             <div>
             <img style={style} src={backgroundImg} alt=""/>
            </div>   
            <div>
                <Contant></Contant>
            </div>
            <div>
                <Link to="chackout">
           <button disabled={!count} style={{
                position:'absolute',
                left:'50%',}
                }>Chackout Your Food</button> </Link>
            </div>
                
        </div>
    );
};

export default Toheader;