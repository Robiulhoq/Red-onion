import { Link } from "react-router-dom";
import React from 'react';

const Delivaryinfo = () => {
    return (
        <div>
            <div className="address-container">
                <h4>EDIT DELEVARY ADDRESS</h4>
                <br/>
               <input className="form-control" type="text"/> 
               <br/>
               <input className="form-control" type="text"/>
               <br/>
               <input className="form-control" type="text"/>
               <br/>
               <input className="form-control" type="text"/>
               <br/>
               <input  className="form-control" type="text"/>
               <br/>
               <Link to="/completedOdder"><button className="btn btn-danger" type="submit">Save</button></Link>
               
            </div>
        </div>
    );
};

export default Delivaryinfo;