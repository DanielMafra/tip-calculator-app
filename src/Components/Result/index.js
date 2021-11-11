import React from 'react';
import styles from './index.module.css';

const Result = () => {
  return (
    <div className={styles.result}>
      <div className={styles.label}>
        <div className={styles.labelResult}>
          <span>Tip Amount</span>
          <span>/ person</span>
        </div>
        <div>
          <span>$45</span>
        </div>
      </div>
      <div className={styles.label}>
        <div className={styles.labelResult}>
          <span>Total</span>
          <span>/ person</span>
        </div>
        <div>
          <span>$45</span>
        </div>
      </div>
      <button>Reset</button>
    </div>
  )
}

export default Result;