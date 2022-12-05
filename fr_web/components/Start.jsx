import styles from './Start.module.css';
import Swal from "sweetalert2";

const Start = () =>{
    const Print = () => {
        Swal.fire({
            icon: "warning",
            title:"SUCCESSFULLY SAVE",
            text: "Do you want to have a copy?",
            showDenyButton: true,
            confirmButtonText: 'Yes',
        })
    }
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <center>
                    <h1>Classroom</h1>
                    <img src='/images/classroom.png'/>
                    <h4>BET-COET-4A</h4>
                    <h4>Date: 09 Dec 2022</h4>
                    <h4>Time: 09:00 AM - 12:00 NN</h4>
                    <button><strong onClick={Print}>Save</strong></button>
                    </center>
                </div>
                <div className={styles.right}>
                    <div className={styles.report}>
                        <ul>
                            <li>
                                <h1>Attendance Report</h1>
                            </li>
                        </ul>
                    </div>
                    <ul className={styles.board}>
                        <ul className={styles.bar}>
                            <li>Name</li>
                            <li>Time</li>
                            <li>Date</li>
                        </ul>

                        <strong>

                        <ul className={styles.attend}>
                            <li>Elaisa Amon</li>
                            <li>09:01 AM</li>
                            <li>09 Dec 22</li>
                        </ul>

                        <ul className={styles.attend1}>
                            <li>Dana Ellysa Camero</li>
                            <li>09:06 AM</li>
                            <li>09 Dec 22</li>
                        </ul>

                        <ul className={styles.attend}>
                            <li>Christian Odonio</li>
                            <li>09:13 AM</li>
                            <li>09 Dec 22</li>
                        </ul>

                        <ul className={styles.attend1}>
                            <li>Robi Lorence Cuartillo</li>
                            <li>10:30 AM</li>
                            <li>09 Dec 22</li>
                        </ul>

                        <ul className={styles.attend}>
                            <li>John Michael De Jose</li>
                            <li>10:44 AM</li>
                            <li>09 Dec 22</li>
                        </ul>
                            
                        <ul className={styles.attend1}>
                            <li>Nico Lenciano</li>
                            <li>10:56 AM</li>
                            <li>09 Dec 22</li>
                        </ul>
                            
                        </strong>

                        <ul className={styles.attend}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className={styles.attend1}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className={styles.attend}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className={styles.attend1}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                            
                        <ul className={styles.attend}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className={styles.attend1}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className={styles.attend}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className={styles.attend1}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Start;