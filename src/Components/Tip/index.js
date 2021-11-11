import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './index.module.css';

const Tip = () => {
  const { tip, setTip } = useContext(GlobalContext);

  function handleClick(e, valueTip) {
    e.preventDefault();
    setTip(parseInt(valueTip));
  }

  return (
    <div className={styles.tips}>
      <label>Select Tip %</label>
      <div className={styles.percents}>
        <button onClick={(e) => handleClick(e, 5)}>5%</button>
        <button onClick={(e) => handleClick(e, 10)}>10%</button>
        <button onClick={(e) => handleClick(e, 15)}>15%</button>
        <button onClick={(e) => handleClick(e, 25)}>25%</button>
        <button onClick={(e) => handleClick(e, 50)}>50%</button>
        <input value={tip > 0 ? tip : ''} onChange={(e) => setTip(parseInt(e.target.value))} type="number" placeholder="Custom" />
      </div>
    </div>
  )
}

export default Tip;