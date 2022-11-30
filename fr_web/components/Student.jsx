import styles from './Student.module.css';
import Navbar from './Navbar';
import Button from './Button';

const Student = () =>{
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1>Student Info</h1>
                    <img src='/images/lai.png'/>
                    <h4>BET-COET-4A</h4>
                    <p>Elaisa Amon</p>
                    <p>Female</p>
                    <p>elaisa.amon@gsfe.tupcavite.edu.ph</p>
                    <div className={styles.class}><p>TUPC-19-0805</p></div>
                    <div className={styles.prior}>
                        <Button variant='primary'>Add</Button>
                        <Button variant='primary'>Update</Button>
                    </div>
                </div>
                <div className={styles.right}>
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Student;