import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './App.css';
import Containinfo from './Componets/Topheader/ContainInfo/Containinfo';
import Contant from './Componets/Topheader/Contant/Contant';
import DelivaryCart from './Componets/Topheader/DelivaryCart/DelivaryCart';
import Login from './Componets/Topheader/Login/Login';
import Notfound from './Componets/Topheader/Notfound/Notfound';
import Toheader from './Componets/Topheader/Toheader';

export const QuantityContext = createContext()

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <QuantityContext.Provider value ={[count, setCount]}>
     <Router>
       
       <Switch>
         <Route exact path="/">
         <Toheader></Toheader>
         <Contant></Contant>
         </Route>
         <Route path="/contant">
            <Contant></Contant>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/foodinfo/:foodid">
           <Containinfo></Containinfo>
         </Route>
         <Route path="/chackout/:foodid">
           <DelivaryCart></DelivaryCart>
         </Route>
         <Route path="*">
           <Notfound></Notfound>
         </Route>
       </Switch>
     </Router>
      </QuantityContext.Provider>
      
    
  );
}

export default App;
