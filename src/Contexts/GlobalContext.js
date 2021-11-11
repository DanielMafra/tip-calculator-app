import React, { useState, useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tipAmount = (bill * tip / 100) / people;
    const valueTotal = (bill / people) + ((bill * tip / 100) / people);
    setAmount(tipAmount);
    setTotal(valueTotal);
  }, [bill, tip, people]);

  function reset(event) {
    event.preventDefault();
    setBill(0);
    setTip(0);
    setPeople(0);
    setAmount(0);
    setTotal(0);
  }

  return (
    <GlobalContext.Provider value={{ amount, total, bill, setBill, tip, setTip, people, setPeople, reset }}>
      {children}
    </GlobalContext.Provider>
  );
};