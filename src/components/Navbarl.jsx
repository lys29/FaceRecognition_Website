import styles from './Navbarl.module.css';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';


const Navbarl = () => {
    return ( 
        <div className={styles.ncontainer}>
            <div>
                <ul> 
                    <Link to="/home">
                        <div className={styles.main}>
                            <Button variant='primary'>
                                <h6>Face <span>recognition</span>
                                <br></br>
                                <span1>Attendance</span1> <span>Checker</span>
                                </h6>
                            </Button>
                        </div>
                    </Link>
                    <div className={styles.hover}>
                        <div className={styles.dropdown}>
                            <Button variant='secondary'>Dashboard</Button>
                                <div className={styles.content}>
                                    <Link to ='/dashboard-camera'><Button variant='primary'>Camera</Button></Link>
                                    <Link to ='/dashboard-attendance'><Button variant='primary'>Attendance</Button></Link>
                                    <Link to ='/dashboard-add-student'><Button variant='primary'>Add Students</Button></Link>
                                    <Link to ='/dashboard-update-student'><Button variant='primary'>Update Students</Button></Link>
                                    <Link to ='/dashboard-add-face'><Button variant='primary'>Add Face Recognition</Button></Link>
                                </div>
                        </div>
                        <Link to ="/contact-us-page"><Button variant='secondary'>Contact Us</Button></Link>
                        <Link to ="/about-us"><Button variant='secondary'>About Us</Button></Link>
                        <div>
                            <div className={styles.dropdown}>
                                <Button variant='secondary'>Welcome, User!</Button>
                                    <div className={styles.content1}>
                                        <Link to ='/'><Button variant='primary'>Log out</Button></Link>
                                    </div>
                        </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbarl;