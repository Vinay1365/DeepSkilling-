import { useState } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('user');
  return (
    <div style={{ padding: '20px' }}>
      <h1>Conditional Rendering</h1>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {role === 'admin' ? 'Administrator' : 'User'}!</h2>
          {role === 'admin' && <p>You have admin privileges.</p>}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={() => { setIsLoggedIn(true); setRole('user'); }}>Login as User</button>
          <button onClick={() => { setIsLoggedIn(true); setRole('admin'); }}>Login as Admin</button>
        </div>
      )}
    </div>
  );
}
export default App;
