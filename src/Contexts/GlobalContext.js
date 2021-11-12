import React, { useState, useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [change, setChange] = useState(true);

  useEffect(() => {
    const tipAmount = (bill * tip / 100) / people;
    const valueTotal = (bill / people) + ((bill * tip / 100) / people);
    setAmount(tipAmount);
    setTotal(valueTotal);
    if (customTip > 0) {
      setTip(customTip);
    }
    if (bill > 0 || tip > 0 || customTip > 0 || people > 0) {
      setChange(false);
    }
  }, [bill, tip, customTip, people]);

  function reset(event) {
    event.preventDefault();
    setBill(0);
    setTip(0);
    setCustomTip(0);
    setPeople(0);
    setAmount(0);
    setTotal(0);
    setChange(true);
  }

  return (
    <GlobalContext.Provider value={{ amount, total, bill, setBill, tip, setTip, customTip, setCustomTip, people, setPeople, reset, change }}>
      {children}
    </GlobalContext.Provider>
  );
};