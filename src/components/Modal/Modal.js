import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    var style = {     
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    border :" 1px solid rgb(120, 203, 236)",
    boxSizing: "border-box"
    }
    return(
        
        <React.Fragment>
            <Backdrop show = {props.show}/>
            <div className={styles.Modal} style={
                {
                    opacity: props.show ? '1' : '0',
                    transform: props.show ? 'translateY(0)' : 'translateY(-50ch)'
                }
            }>
                <input placeholder="City Name (istanbul london etc.)" onChange ={props.onInput} value={props.value} required={true} style={style}/>
                
                {props.children}
            </div>
        </React.Fragment>

    )

}





export default modal;