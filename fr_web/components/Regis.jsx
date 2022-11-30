import styles from './Regis.module.css';
import Navbar from './Navbar.jsx';
import Button from './Button.jsx';

const Regis = () =>{
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src='/images/hair.png'/>
                </div>
                <div className={styles.right}>
                    <div className={styles.right1}>
                        <img src='/images/img.png'/>
                        <div className={styles.pf}><Button variant='secondary'>Upload Picture</Button></div>
                        <div className={styles.spread}>
                            <p>Student ID:</p>
                            <input type='text'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>First Name:</p>
                            <input type='text'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>Last Name:</p>
                            <input type='text'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>Gender:</p>
                            <input type='text'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>Class:</p>
                            <input type='text'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>Email:</p>
                            <input type='text'></input>
                        </div>
                        <div className={styles.last}><Button variant='secondary'>Submit</Button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regis;