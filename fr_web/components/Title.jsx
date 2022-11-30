import styles from './Title.module.css';
import Button from './Button.jsx';
import Title2 from '../components/Title2.jsx';
import Navbar from '../components/Navbar.jsx';

const Title = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <div className={styles.con1}>
                        <h1> <strong>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></strong></h1>
                        <div className={styles.right}>
                            <a href='/Start1'><Button variant='primary'>Get Started</Button></a>
                            <div className={styles.right1}><a href='/Register'><Button variant='primary'>Register</Button></a></div>
                        </div>
                        <div className={styles.t}><center><a href=''><Button variant='secondary'><p>Take Tutorial </p></Button></a></center></div>
                    </div>
                </div>
            </div>
            <div>
                <Title2 />
            </div>
        </div>
    );
};

export default Title;