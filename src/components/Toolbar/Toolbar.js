import React from 'react';
import styles from './Toolbar.module.css'
const toolbar = (props) => {

    return(
    <React.Fragment>

        <header className={styles.Toolbar}>
            <div>Logo</div>
            <div>Weather App React.js Demo</div>
            <div>Button</div>
            
            
        </header>

        </React.Fragment>)
}
    



export default toolbar;