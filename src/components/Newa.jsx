import styles from './Newa.module.css';
import React from 'react';
import Button from './Button.jsx';
import NewAcountSidePic from '../images/Newa.png';
import { Link } from 'react-router-dom';

const Newa = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.left1}>
                        <h1>Create your account</h1>
                        <div>
                            <input type="FName" placeholder="First Name"></input>
                            <input type="LName" placeholder="Last Name"></input>
                        </div>
                        <div>
                            <input type="Text" placeholder="Email"></input>
                        </div>
                        <div>
                            <input type="Text" placeholder="Password"></input>
                        </div>
                        <div>
                            <input type="Text" placeholder="Confirm Password"></input>
                        </div>
                        <div>
                            <input type="Day" placeholder="Birthday 00/00/0000"></input>
                        </div>
                        <div>
                            <ul>
                                <div className={styles.log}><Link to='/signin'><Button variant='primary'>Log In instead</Button></Link></div>
                                <div className={styles.prior}><Link to='/signin'><Button>Submit</Button></Link></div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right1}>
                        <img src= {NewAcountSidePic} ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Newa;
