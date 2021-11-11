import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './index.module.css';

const Result = () => {
  const { amount, total } = useContext(GlobalContext);

  return (
    <div className={styles.result}>
      <div className={styles.label}>
        <div className={styles.labelResult}>
          <span>Tip Amount</span>
          <span>/ person</span>
        </div>
        <div className={styles.value}>
          <span>${amount}</span>
        </div>
      </div>
      <div className={styles.label}>
        <div className={styles.labelResult}>
          <span>Total</span>
          <span>/ person</span>
        </div>
        <div className={styles.value}>
          <span>${total}</span>
        </div>
      </div>
      <button>Reset</button>
    </div>
  )
}

export default Result;