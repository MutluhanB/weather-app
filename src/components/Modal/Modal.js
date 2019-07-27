import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return(

        <React.Fragment>
            <Backdrop show = {props.show}/>
            <div className={styles.Modal} style={
                {
                    opacity: props.show ? '1' : '0',
                    transform: props.show ? 'translateY(0)' : 'translateY(-50ch)'
                }
            }>
                <input placeholder="City Name" onChange ={props.onInput}></input>
                
                {props.children}
            </div>
        </React.Fragment>

    )

}





export default modal;