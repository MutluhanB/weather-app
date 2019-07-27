import React from 'react';
import styles from './Toolbar.module.css'
const toolbar = (props) => {

    return(
    <React.Fragment>

        <header className={styles.Toolbar}>
            <div>Logo</div>
            <div>Search</div>
            <div>Button</div>
            
            
        </header>

        </React.Fragment>)
}
    



export default toolbar;