import styles from './Navbarl.module.css';
import Button from './Button.jsx';


const Navbarl = () => {
    return (
        <div className={styles.container}>
            <div>
                <ul>
                    <a href="/Home1"><div className={styles.main}><Button variant='primary'><h6>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></h6></Button></div></a>
                    <div className={styles.hover}>
                        <div className={styles.dropdown}>
                            <Button variant='secondary'>Dashboard</Button>
                                <div className={styles.content}>
                                    <a href='/Cam'><Button variant='primary'>Camera</Button></a>
                                    <a href='/Nstart'><Button variant='primary'>Attendance</Button></a>
                                    <a href='/Add'><Button variant='primary'>Add Students</Button></a>
                                    <a href='/Up'><Button variant='primary'>Update Students</Button></a>
                                    <a href='/Rf'><Button variant='primary'>Add Face Recognition</Button></a>
                                </div>
                        </div>
                        <a href="/Us1"><Button variant='secondary'>Contact Us</Button></a>
                        <a href="/About1"><Button variant='secondary'>About Us</Button></a>
                        <div>
                            <div className={styles.dropdown}>
                                <Button variant='secondary'>Welcome, User!</Button>
                                    <div className={styles.content1}>
                                        <a href='/Home'><Button variant='primary'>Log out</Button></a>
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