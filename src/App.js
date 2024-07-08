import { Outlet, Navigate, useNavigate } from "react-router-dom";
import {useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = () => {
    setisLoggedIn(true);
  }
  const logout =() => {
    setisLoggedIn(false)
  };

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login")
    }
  }, [isLoggedIn])

  return (
    <div className="app">
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to = "/login" />}
      <Outlet context = { login} />
    </div>
  );
}

export default App;
