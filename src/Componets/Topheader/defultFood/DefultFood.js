import React from 'react';

const DefultFood = (props) => {
 console.log(props);
    return (
        <div>
            <h3>This is defult foood</h3>
     <h3>{props.defultFood.title}</h3>
        </div>
    );
};

export default DefultFood;