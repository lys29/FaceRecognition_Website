import styles from './Title11.module.css';
// import Button from './Button.jsx';
import MarkPic from '../images/mark.png';
const Title11 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <div>
                        <h1> <strong>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></strong></h1>
                    </div>

                    <div className={styles.right}>
                        <img src={MarkPic} alt="Mark Pic"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Title11;