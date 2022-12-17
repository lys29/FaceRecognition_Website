import styles from './Aboutus.module.css';
import AboutUs from "../images/aboutus.png";

const Aboutus  = () => { 
    return (
        <div>
            <div className={styles.aboutcontainer}>
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
                    <img src={AboutUs} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;