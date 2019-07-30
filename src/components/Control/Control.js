import React from 'react';
import styles from './Control.module.css';


const control = (props) => {
    return(
        <div className = {styles.Control} onClick={props.clicked}>

            
                <img className = {styles.Logo} src={"assets/plus.png"} alt="not found"/>
            <div className={styles.Text}>
                Click Here To Add New City
            </div>
            
        </div>
    )
}

export default control;