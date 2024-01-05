import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('abcd');
  const [length, setLength] = useState('');
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  return (
    <>
      <h2>{password}</h2>
      <label htmlFor="length">{length}</label>
      <input type="range" id='' min={8} max={20} />
    </>
  );
};

export default App;
