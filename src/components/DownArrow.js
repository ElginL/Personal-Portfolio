import styles from '../styles/components/DownArrow.module.css';

const DownArrow = () => {
    return (
        <div className={styles["container"]}>
            <div className={`${styles.arrow} ${styles["arrow-first"]}`}></div>
            <div className={`${styles.arrow} ${styles["arrow-second"]}`}></div>
        </div>
    )
}

export default DownArrow;