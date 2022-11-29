import styles from './Aboutus.module.css';
import Navbar from './Navbar.jsx';
import Title2 from './Title2';

const Aboutus  = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1>About Us</h1>
                    <div className={styles.left1}>
                        <pre>            Welcome To face recognition attendance checker. 
                        <br></br>Face recognition attendance checker is a Professional 
                        <br></br>Static Platform.Here we will provide you only interesting content, 
                        <br></br>which you will like very much. We're dedicated to providing you the 
                        <br></br>best of, with a focus on dependability and facial recognition. We're 
                        <br></br>working to turn our passion for static into a booming online website. 
                        <br></br>We hope you enjoy our static as much as we enjoy offering them to you. 
                        <br></br>We will keep posting more important posts on my Website for all of you. 
                        <br></br>Please give your support and love. Thanks For Visiting Our Site 
                        <br></br>Have a nice day!</pre>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src='/images/aboutus.png'></img>
                </div>
            </div>
            <div>
                <Title2 />
            </div>
        </div>
    )
}

export default Aboutus;