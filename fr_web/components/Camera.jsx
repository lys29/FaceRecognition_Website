import styles from './Camera.module.css';
import Navbarl from './Navbarl.jsx';

const Camera = () =>{
    return (
        <div>
            <div>
                <Navbarl />
            </div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <h1>Camera</h1>
                    <img src='/images/camera.png'/>
                </div>
            </div>
        </div>
    )
}

export default Camera;