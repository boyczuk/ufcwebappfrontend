import React, { useEffect, useState } from 'react';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    fetch('/api/users/me')
      .then(response => {
        const authToken = response.headers.get('x-auth-token');
        setToken(authToken);
        return response.json();
      })
      .then(data => {
        // Handle the response body if needed
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Token: {token}</h1>
    </div>
  );
};

export default App;
