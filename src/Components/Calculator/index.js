import React from 'react';
import styles from './index.module.css';
import Input from '../Input/index';
import Tip from '../Tip/index';

const Calculator = () => {
  return (
    <div className={styles.container}>
      <form>
        <Input label="Bill" icon="iconBill" />
        <Tip />
        <Input label="Number of People" icon="iconPerson" />
      </form>
    </div>
  )
}

export default Calculator;