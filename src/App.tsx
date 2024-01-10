import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setText(text);
    localStorage.setItem('notepad-text', text);
  };

  useEffect(() => {
    const text = localStorage.getItem('notepad-text');
    if (text) {
      setText(text);
    }
  }, []);

  return (
    <>
      <h1>Notepad 🗒️</h1>
      <textarea value={text} onInput={handleInput}></textarea>
    </>
  );
}

export default App;
