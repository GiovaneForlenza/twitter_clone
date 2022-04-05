import React, { useState } from "react";
import "./App.css";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <div className="App">{!isLoggedIn ? <SignIn /> : <Home />}</div>;
}

export default App;
