import styles from './Nav.module.css';
import Button from './Button.jsx';
import Link from 'next/link';


const Nav = () => {
    return (
        <div className={styles.container}>
            <div>
                <ul>
                    <Link href="/Home"><div className={styles.main}><Button variant='primary'><h6>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></h6></Button></div></Link>
                    <div className={styles.hover}>
                        <Link href="/Us"><Button variant='secondary'>Contact Us</Button></Link>
                        <Link href="/About"><Button variant='secondary'>About Us</Button></Link>
                        <div className={styles.sign}><Link href="/Log"><Button variant='secondary'>Login</Button></Link></div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Nav;