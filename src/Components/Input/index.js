import React from 'react';
import styles from './index.module.css';

const Input = ({ label, icon }) => {
  return (
    <div className={`${styles.input} ${styles[icon]}`}>
      <label htmlFor="bill">{label}</label>
      <input id="bill" type="number" placeholder="0" />
    </div>
  )
}

export default Input;