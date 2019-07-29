import React from 'react';
import styles from './Control.module.css';
import plusSigng from '../../assets/plus.png';

const control = (props) => {
    console.log("props clicked" )
    return(
        <div className = {styles.Control} onClick={props.clicked}>

            
                <img className = {styles.Logo}src={plusSigng} alt="not found"/>
            <div className={styles.Text}>
                Click Here To Add New City
            </div>
            
        </div>
    )
}

export default control;