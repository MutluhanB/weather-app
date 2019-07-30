import React from 'react';
import styles from './Toolbar.module.css'
import { forInStatement } from '@babel/types';

const toolbar = (props) => {

    return(
    <React.Fragment>

        <header className={styles.Toolbar}>
            <div><img className={styles.logo} src = {"assets/logo.png"} alt="logo not found"></img></div>
            <div className={styles.text}>Weather App </div>
            <a href ="https://github.com/MutluhanB/weather-app">
            <div className={styles.source} h>
                <img className = {styles.github} src={"assets/github.png"} alt="github icon not found"></img>
                <div style={{
                    fontSize:"18px"}}
                    >Source Code</div>
            </div>
            </a>
            
            
        </header>

        </React.Fragment>)
}
    



export default toolbar;