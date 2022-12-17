import styles from './Login.module.css';
import Button from './Button.jsx';
import NewAcountSidePic from '../images/Newa.png';
import { Link } from 'react-router-dom';
 
const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.left1}>
                    <h1>Log in</h1>
                    <div>
                        <input type="Text" placeholder="Email or Username"></input>
                    </div>
                    <div>
                        <input type="Text" placeholder="Password"></input>
                    </div>
                    <div>

                        <Link to='/home'><Button>Log in</Button></Link>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.right1}>
                    <img src= {NewAcountSidePic}/>
                </div>
            </div>
        </div>
    );
};

export default Login;