import styles from './Navbarl.module.css';
import Button from './Button.jsx';


const Navbarl = () => {
    return (
        <div className={styles.container}>
            <div>
                <ul>
                    <a href="/Home"><div className={styles.main}><Button variant='primary'><h6>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></h6></Button></div></a>
                    <div className={styles.hover}>
                        <a href="/Start1"><Button variant='secondary'>Start</Button></a>
                        <a href="/Us"><Button variant='secondary'>Contact Us</Button></a>
                        <a href="/About"><Button variant='secondary'>About Us</Button></a>
                        <div>
                            <p>Welcome, User!</p>
                            <div className={styles.out}><a href="/Home"><Button variant='primary'>Log out</Button></a></div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbarl;