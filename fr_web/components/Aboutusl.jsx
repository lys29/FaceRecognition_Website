import styles from './Aboutusl.module.css';
import Title2 from './Title2';

const Aboutusl  = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1>About Us</h1>
                    <div className={styles.left1}>
                        <pre>Hello! We are the JCRED Team. We are here to provide 
                        <br></br>you with the quickest and most innovative method of 
                        <br></br>checking attendance, and with the help of our 
                        <br></br>web application called Face Recognition Attendance 
                        <br></br>checker (FRAC), you can just sit, relax and may save 
                        <br></br>even more time.</pre>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src='/images/aboutus.png'></img>
                </div>
            </div>
            <div>
                <Title2 />
            </div>
        </div>
    )
}

export default Aboutusl;