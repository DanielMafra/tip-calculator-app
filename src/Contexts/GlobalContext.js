import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  function reset() {
    setBill(0);
    setTip(0);
    setPeople(0);
  }

  return (
    <GlobalContext.Provider value={{ amount, total, reset }}>
      {children}
    </GlobalContext.Provider>
  );
};