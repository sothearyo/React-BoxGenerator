import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BoxDisplay = (props) => {

    return (
        <div>
            {props.colors.map( (color, i) =>                 
                <div key={i} style={{
                    display: 'inline-block',
                    height:'100px',
                    width:'100px', 
                    margin: '1em',
                    background:`${color}`
                }}>{color}</div>           
                )
            }
        </div>
        
    );
};

export default BoxDisplay;