import React, { useState } from "react";
import "./App.css";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? (
        <Home />
      ) : !showSignUp ? (
        <SignIn setShowSignUp={setShowSignUp} />
      ) : (
        <SignUp setShowSignUp={setShowSignUp} />
      )}
    </div>
  );
}

export default App;
