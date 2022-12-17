import styles from './Addrf.module.css';
import Button from './Button.jsx';
import CameraImage from '../images/cimage.png';
import { Link } from 'react-router-dom';

const Addrf = () =>{
    return (
        <div>

            <div className={styles.container}>
                <div className={styles.con}>
                    <div className={styles.left}>
                        <h1>Face Recognition</h1>
                        <div className={styles.spread}>
                            <p> Student ID</p>
                            <input type='id' placeholder='190805'></input>
                        </div>
                        <div>
                            <ul>
                                <div className={styles.inside}>
                                    <center>
                                        <img src= {CameraImage} />
                                        <pre>   Name:     Elaisa Amon</pre>
                                        <pre>Course:   BET-COET</pre>
                                    </center>
                                </div>
                            </ul>
                        </div>
                        <div className={styles.spread}>
                            <Button variant='secondary'>Add</Button>
                            <div className={styles.spread1}>
                                <Link to='/dashboard-update-face'><Button variant='secondary'>Update</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addrf;