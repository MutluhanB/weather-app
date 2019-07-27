import React from 'react';
import styles from './Control.module.css';

const control = (props) => {
    console.log("props clicked" )
    return(
        <div className = {styles.Control} onClick={props.clicked}>

            <div className={styles.Logo} >
                Logo
            </div>
            <div className={styles.Text}>
                Click Here To Add New city
            </div>
            
        </div>
    )
}

export default control;