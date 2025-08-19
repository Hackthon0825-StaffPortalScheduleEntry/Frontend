import React, { useState } from "react";
import Header from "./screens/navbar";
import Dashboard from "./components/Dashboard";
import Login from "./screens/User/Login";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <>
          <Header />
          <Dashboard />
          
        </>
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
