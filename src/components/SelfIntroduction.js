import styles from '../styles/components/SelfIntroduction.module.css';
import portrait from '../assets/portrait.png';
import { HashLink as Link } from 'react-router-hash-link';

const SelfIntroduction = () => {
    return (
        <div id="self-introduction" className={styles["background-img"]}>
            <div className={styles["content-container"]}>
                <div className={styles["left-container"]}>
                    <h1 className={styles["name"]}>
                        Elgin Lee
                    </h1>
                    <h3 className={styles["role"]}>
                        Aspiring Software Developer
                    </h3>
                    <p className={styles["text"]}>
                        Final Year Computer Science
                    </p>
                    <p className={styles["text"]}>
                        National University Of Singapore
                    </p>
                    <Link to="#portfolio" className={styles["view-button"]}>
                        View My Work
                    </Link>
                </div>
                <img src={portrait} alt="Personal Portrait" className={styles["portrait"]} />
            </div>
        </div>
    )
}

export default SelfIntroduction;