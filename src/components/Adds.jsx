import styles from './Adds.module.css';
import Navbarl from './Navbarl.jsx';
import Swal from "sweetalert2";

const Adds = () =>{
    const Add = () => {
        Swal.fire({
            icon: "success",
            title: "SUCCESSFULLY ADDED",
            text: "Your changes have been succcessfully added to our database",
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
            <div>
                <Navbarl />
            </div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <div className={styles.left}>
                        <h1>ADD STUDENTS</h1>
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
                            <input type='left'></input>
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
                        <img src='/images/simage.png'/>
                        <div className={styles.upload}><button variant='primary'>Upload Image</button></div>
                        <div className={styles.fix}>
                            <div className={styles.clear}><button onClick={Clear}>Clear</button></div>
                            <div className={styles.Add}><button onClick={Add}>Add</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adds;