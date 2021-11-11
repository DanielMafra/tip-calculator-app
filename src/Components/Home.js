import React from 'react';
import styles from './Home.module.css';
import Calculator from './Calculator/index'

const Home = () => {

  return (
    <div className={styles.home}>
      <img src="/assets/logo.svg" alt="Splitter" />
      <Calculator />
    </div>
  );
};

export default Home;