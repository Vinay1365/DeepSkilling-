import { useState } from 'react';
function App() {
  const [message, setMessage] = useState('Click a button');
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Events</h1>
      <p>{message}</p>
      <button onClick={() => setMessage('Button clicked!')}>Click Me</button>
      <button onClick={() => setMessage('Hovered!')} onMouseEnter={() => setMessage('Mouse entered!')}>Hover Me</button>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
export default App;
