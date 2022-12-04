import styles from './Navbar.module.css';
import Button from './Button.jsx';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                <ul>
                    <Link href="/Home"><div className={styles.main}><Button variant='primary'><h6>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></h6></Button></div></Link>
                    <div className={styles.hover}>
                        <Link href="/Start1"><Button variant='secondary'>Start</Button></Link>
                        <Link href="/Stud"><Button variant='secondary'>Student</Button></Link>
                        <Link href="/Us"><Button variant='secondary'>Contact Us</Button></Link>
                        <Link href="/About"><Button variant='secondary'>About Us</Button></Link>
                        <div className={styles.sign}><Link href="/Sign"><Button variant='secondary'>Sign Up</Button></Link></div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;