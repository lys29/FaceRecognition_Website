import styles from './Login.module.css';
import Button from './Button.jsx';
import Link from 'next/link';

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
                        <Link href='/Home1'><Button>Log in</Button></Link>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.right1}>
                    <img src='/images/Newa.png'/>
                </div>
            </div>
        </div>
    );
};

export default Login;