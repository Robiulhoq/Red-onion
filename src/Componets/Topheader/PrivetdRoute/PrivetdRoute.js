import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { QuantityContext } from '../../../App';


const PrivetdRoute = ({children, ...rest}) => {
    const [user, setUser] = useContext(QuantityContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
          
        )
       
      }
    />
    );
};

export default PrivetdRoute;