import React, { useState } from 'react';
import Login from './pages/Login';
import Welcome from './pages/Welcome';

function App() {
  const [fullName, setFullName] = useState('');

  return (
    <div className="App">
      {fullName ? (
        <Welcome fullName={fullName} />
      ) : (
        <Login setFullName={setFullName} />
      )}
    </div>
  );
}

export default App;
