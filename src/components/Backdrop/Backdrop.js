import React from 'react';
import styles from './Backdrop.module.css'

const backDrop = (props) => (
    props.show ? <div className={styles.Backdrop}/> : null

)


export default backDrop;