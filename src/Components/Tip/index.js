import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './index.module.css';

const Tip = () => {
  const { tip, setTip, customTip, setCustomTip } = useContext(GlobalContext);

  function handleClick(e, valueTip) {
    e.preventDefault();
    setTip(parseInt(valueTip));
    setCustomTip(0);
  }

  return (
    <div className={styles.tips}>
      <label>Select Tip %</label>
      <div className={styles.percents}>
        <button onClick={(e) => handleClick(e, 5)} className={tip === 5 ? styles.activeTip : undefined}>5%</button>
        <button onClick={(e) => handleClick(e, 10)} className={tip === 10 ? styles.activeTip : undefined}>10%</button>
        <button onClick={(e) => handleClick(e, 15)} className={tip === 15 ? styles.activeTip : undefined}>15%</button>
        <button onClick={(e) => handleClick(e, 25)} className={tip === 25 ? styles.activeTip : undefined}>25%</button>
        <button onClick={(e) => handleClick(e, 50)} className={tip === 50 ? styles.activeTip : undefined}>50%</button>
        <input value={customTip > 0 ? customTip : ''} onChange={(e) => setCustomTip(parseInt(e.target.value))} type="number" placeholder="Custom" className={customTip > 0 ? styles.activeCustomTip : undefined} />
      </div>
    </div>
  )
}

export default Tip;