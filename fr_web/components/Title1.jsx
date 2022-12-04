import styles from './Title1.module.css';
import Button from './Button.jsx';
import Title2 from '../components/Title2.jsx';
import Link from 'next/link';

const Title1 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <div>
                        <h1> <strong>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></strong></h1>
                    </div>

                    <div className={styles.right}>
                        <Link href='/Sign'><Button variant='primary'>Get Started</Button></Link>
                        <div className={styles.t}><Link href='/'><Button variant='secondary'>Take Tutorial</Button></Link></div>
                    </div>
                </div>
            </div>
            <div>
                <Title2 />
            </div>
        </div>
    );
};

export default Title1;