import React from 'react';
import styles from '../components/Popup.module.css';
import Button from '../components/Button.jsx';

function Popup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupinner}>
                <Button className={styles.closebtn} onClick={() => props.setTrigger(false)}>close</Button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup;