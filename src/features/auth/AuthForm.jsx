import { useState } from 'react';
import { useLoginMutation, useRegisterMutation } from './authSlice';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const navigate = useNavigate();

  // Handles swapping between login and register
  const [isLogin, setIsLogin] = useState(true);
  const authAction = isLogin ? 'Login' : 'Register';
  const altCopy = isLogin
    ? 'Need an account? Register here.'
    : 'Already have an account? Login here.';

  // Controlled form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Form submission
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const attemptAuth = async (evt) => {
    evt.preventDefault();

    const authMethod = isLogin ? login : register;
    const credentials = { username, password };

    setError(null);
    setLoading(true);

    try {
      // We need to unwrap here if we want to catch the error
      await authMethod(credentials).unwrap();
      navigate('/');
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
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
      {loading && <p>Logging in...</p>}
      {error && <p>{error.data.error.message}</p>}
    </>
  );
}
