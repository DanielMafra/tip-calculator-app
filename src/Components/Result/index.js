import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './index.module.css';

const Result = () => {
  const { amount, total, bill, tip, people, reset } = useContext(GlobalContext);

  return (
    <div className={styles.result}>
      <div className={styles.label}>
        <div className={styles.labelResult}>
          <span>Tip Amount</span>
          <span>/ person</span>
        </div>
        <div className={styles.value}>
          <span>${bill > 0 && tip > 0 && people > 0 ? amount.toFixed(2) : "0.00"}</span>
        </div>
      </div>
      <div className={styles.label}>
        <div className={styles.labelResult}>
          <span>Total</span>
          <span>/ person</span>
        </div>
        <div className={styles.value}>
          <span>${bill > 0 && tip > 0 && people > 0 ? total.toFixed(2) : "0.00"}</span>
        </div>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Result;