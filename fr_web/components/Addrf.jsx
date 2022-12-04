import styles from './Addrf.module.css';
import Button from './Button.jsx';
import Navbarl from './Navbarl.jsx';
import Link from 'next/link';

const Addrf = () =>{
    return (
        <div>
            <div>
                <Navbarl />
            </div>
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
                                        <img src='/images/cimage.png'/>
                                        <pre>   Name:     Elaisa Amon</pre>
                                        <pre>Course:   BET-COET</pre>
                                    </center>
                                </div>
                            </ul>
                        </div>
                        <div className={styles.spread}>
                            <Button variant='secondary'>Add</Button>
                            <div className={styles.spread1}><Link href='/Rf1'><Button variant='secondary'>Update</Button></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addrf;