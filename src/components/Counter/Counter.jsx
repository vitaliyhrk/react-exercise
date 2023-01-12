import styles from "./Counter.module.css";
function Counter({ onClick, number, counterValue }) {
  const handleClick = (e) => onClick(e, number);

  return (
    <div className={styles.counter}>
      <h2 className={styles.counterTitle}>Counter {number + 1}</h2>
      <div className={styles.counterWrapper}>
        <button
          className={styles.counterButton}
          name="decrease"
          onClick={handleClick}
        >
          -
        </button>
        <p className={styles.counterValue}>{counterValue}</p>
        <button
          className={styles.counterButton}
          name="increase"
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
