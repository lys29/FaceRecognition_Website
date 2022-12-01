import styles from './Newa.module.css';
import Button from './Button.jsx';

const Newa = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.left1}>
                        <h1>Create your account</h1>
                        <div>
                            <input type="FName" placeholder="First Name"></input>
                            <input type="LName" placeholder="Last Name"></input>
                        </div>
                        <div>
                            <input type="Text" placeholder="Email"></input>
                        </div>
                        <div>
                            <input type="Text" placeholder="Password"></input>
                        </div>
                        <div>
                            <input type="Text" placeholder="Confirm Password"></input>
                        </div>
                        <div>
                            <input type="Text" placeholder="Search"></input>
                        </div>
                        <div>
                            <input type="Day" placeholder="Birthday 00/00/0000"></input>
                        </div>
                        <div>
                            <ul>
                                <div className={styles.log}><a href='/Log'><Button variant='primary'>Log In instead</Button></a></div>
                                <div className={styles.prior}><a href='/Log'><Button variant='primary'>Submit</Button></a></div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right1}>
                        <img src="/images/Newa.png"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newa;
