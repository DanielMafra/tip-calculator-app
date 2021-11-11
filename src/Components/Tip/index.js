import React from 'react';
import styles from './index.module.css';

const Tip = () => {
  return (
    <div className={styles.tips}>
      <label>Select Tip %</label>
      <div className={styles.percents}>
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <input type="number" placeholder="Custom" />
      </div>
    </div>
  )
}

export default Tip;