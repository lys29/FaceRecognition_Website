import styles from './Title.module.css';
import Button from './Button.jsx';
// import Title2 from '../components/Title2.jsx';
import { Link } from 'react-router-dom';
//Done!
const Title = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <div>
                        <h1> <strong>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></strong></h1>
                    </div>

                    <div className={styles.right}>
                        <Link to='/signup'><Button variant='primary'>Get Started</Button></Link>
                        <div className={styles.t}><a href='/'><Button variant='secondary'>Take Tutorial</Button></a></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Title;