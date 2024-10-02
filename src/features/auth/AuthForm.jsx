import { useState } from "react";
import { useLoginMutation, useRegisterMutation } from "./authSlice";
import { useNavigate } from "react-router-dom";

import "./AuthForm.scss";

/** This form allows users to register or log in. */
export default function AuthForm() {
  const navigate = useNavigate();

  // Handles swapping between login and register
  const [isLogin, setIsLogin] = useState(true);
  const authAction = isLogin ? "Login" : "Register";
  const altCopy = isLogin
    ? "Need an account? Register here."
    : "Already have an account? Login here.";

  // Controlled form fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Form submission
  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const [register, { isLoading: registerLoading }] = useRegisterMutation();
  const [error, setError] = useState();

  /** Send the requested authentication action to the API */
  const attemptAuth = async (event) => {
    event.preventDefault();

    const authMethod = isLogin ? login : register;
    const credentials = { username, password };

    // Only navigate away if auth succeeds
    try {
      setError();
      await authMethod(credentials).unwrap();
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <h1>{authAction}</h1>
      <form onSubmit={attemptAuth}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>
        <button>{authAction}</button>
      </form>
      <a onClick={() => setIsLogin(!isLogin)}>{altCopy}</a>
      {(loginLoading || registerLoading) && <p>Please wait...</p>}
      {error && (
        <p className="error" role="alert">
          {error.message}
        </p>
      )}
    </>
  );
}
