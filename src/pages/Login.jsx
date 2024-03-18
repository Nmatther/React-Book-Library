import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../API';

const Login = ({ setToken, token }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const data = await login(username, password);
    if (data.token) {
      localStorage.setItem('token', data.token);
      setToken(data.token);
      navigate('/');
    }
  }
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate])

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;