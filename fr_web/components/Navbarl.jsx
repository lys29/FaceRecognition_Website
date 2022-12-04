import styles from './Navbarl.module.css';
import Button from './Button.jsx';
import Link from 'next/link';


const Navbarl = () => {
    return (
        <div className={styles.container}>
            <div>
                <ul>
                    <Link href="/Home1"><div className={styles.main}><Button variant='primary'><h6>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></h6></Button></div></Link>
                    <div className={styles.hover}>
                        <div className={styles.dropdown}>
                            <Button variant='secondary'>Dashboard</Button>
                                <div className={styles.content}>
                                    <Link href='/Cam'><Button variant='primary'>Camera</Button></Link>
                                    <Link href='/Nstart'><Button variant='primary'>Attendance</Button></Link>
                                    <Link href='/Add'><Button variant='primary'>Add Students</Button></Link>
                                    <Link href='/Up'><Button variant='primary'>Update Students</Button></Link>
                                    <Link href='/Rf'><Button variant='primary'>Add Face Recognition</Button></Link>
                                </div>
                        </div>
                        <Link href="/Us1"><Button variant='secondary'>Contact Us</Button></Link>
                        <Link href="/About1"><Button variant='secondary'>About Us</Button></Link>
                        <div>
                            <div className={styles.dropdown}>
                                <Button variant='secondary'>Welcome, User!</Button>
                                    <div className={styles.content1}>
                                        <Link href='/Home'><Button variant='primary'>Log out</Button></Link>
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