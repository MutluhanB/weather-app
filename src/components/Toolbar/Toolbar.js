import React from 'react';
import styles from './Toolbar.module.css'

const toolbar = (props) => {

    return(
    <React.Fragment>

        <header className={styles.Toolbar}>
            <div><img src = {"assets/logo.png"}></img></div>
            <div>Weather App React.js Demo</div>
            <div className={styles.source}>Source Code
                <img className = {styles.image} src={"assets/github.png"}></img>

            </div>
            
            
        </header>

        </React.Fragment>)
}
    



export default toolbar;