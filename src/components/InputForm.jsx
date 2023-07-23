import React, { useState } from 'react';

export default function InputForm({ onAddItem }) {
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddItem(item);
      }}
    >
      <input type="text" value={item} onChange={handleChange} />
      <button>+</button>
    </form>
  );
}
