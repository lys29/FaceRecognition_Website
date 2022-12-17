import styles from './Update.module.css';
import Swal from "sweetalert2";
import SampleImage from '../images/simage.png';

const Update = () =>{
    const Submit = () => {
        Swal.fire({
            icon: "success",
            title: "SUCCESSFULLY UPDATED!",
            text: "Your changes have been succcessfully updated",
            showConfirmButton: true
        })
    }

    const Clear = () => {
        Swal.fire({
            icon: "warning",
            title:"Clear!",
            text: "Are you sure you want to clear all inputed data?",
            showDenyButton: true,
            confirmButtonText: 'Yes',
        })
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <div className={styles.left}>
                        <h1>UPDATE STUDENTS</h1>
                        <div className={styles.spread}>
                            <p>Student ID:</p>
                            <input type='left'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>First Name:</p>
                            <input type='left'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>Middle Name:</p>
                            <input type='left'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>Last Name:</p>
                            <input type='left'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>Course:</p>
                            <input type='left'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>Gender:</p>
                            <select>
                                <option value="0">Select Gender</option>
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                                <option value="3">Others</option>
                            </select>
                        </div>
                        <div className={styles.spread}>
                            <p>Email:</p>
                            <input type='left'></input>
                        </div>
                        <div className={styles.spread}>
                            <p>Birthdate:</p>
                            <input type='left' placeholder='00/00/0000'></input>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.spread1}>
                            <p>Address:</p>
                            <input type='rightA'></input>
                        </div>
                        <div className={styles.spread1}>
                            <p>Contact:</p>
                            <input type='rightC'></input>
                        </div>
                        <img src= {SampleImage}/>
                        <div className={styles.upload}><button>Upload Image</button></div>
                        <div className={styles.fix}>
                            <div className={styles.clear}><button onClick={Clear}>Clear</button></div>
                            <div className={styles.Add}><button onClick={Submit}>Update</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update;