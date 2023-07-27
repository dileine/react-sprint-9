import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import { AppContext } from "../../app/context/AppContext";
import { Container } from "../../styles/Container";

const Auth = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleAuth = (email, password) => {
    if (isLoginMode) {
      localStorage.setItem("user", JSON.stringify({ email }));
      setUser({ email });
      navigate("/Recipes");
    } else {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      setUser({ email, password });
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Container>
      {user ? (
        <>
          <p>Hola, {user.email}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <AuthForm
            onAuth={handleAuth}
            isLogin={isLoginMode}
            setIsLogin={setIsLoginMode}
          />
        </>
      )}
    </Container>
  );
};

export default Auth;
