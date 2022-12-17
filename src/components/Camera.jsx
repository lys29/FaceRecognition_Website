import styles from './Camera.module.css';
import CameraSample from '../images/camera.png';
const Camera = () =>{
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <h1>Camera</h1>
                    <img src= {CameraSample} />
                </div>
            </div>
        </div>
    )
}

export default Camera;