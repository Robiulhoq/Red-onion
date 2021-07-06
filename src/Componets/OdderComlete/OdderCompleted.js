import React from 'react';
import Delivaryitem from '../Topheader/Delivaryfood/Delivaryitem';
import map from '../../images/google-map.jpg';
import cycle from '../../images/Group 1151.png';

const OdderCompleted = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                    <img style={{height:'5in',width: '5in'}} src={map} alt="" />
                </div>
                <div className="col mt-5">
                    <img style={{height: '1in', width:'1in'}} src={cycle} alt="" />
                    <h6>Your Location</h6>
                    <p>Gulshan No 8</p>
                    <br />
                    <h6>Shop Address</h6>
                    <p>Gulshan Plaza</p>
                    <br />
                    <h4>09:30 PM</h4>
                    <p>Estimeted Delyvery</p>
                    <br />
                    <button className="btn btn-danger">Contact</button>
                </div>
            </div>
            
        </div>
    );
};

export default OdderCompleted;