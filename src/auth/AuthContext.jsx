import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = (username, password) => {
    // Dummy authentication
    if (username === "admin" && password === "1234") {
      setIsAuthenticated(true);
      setError("");
      navigate("/home");
    } else {
      setError("Invalid username or password!");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
