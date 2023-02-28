import React, { useState, useEffect } from "react";

// Use functional or class component based on your preference.
// Make it a default export.

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (username.length && password.length) {
      setFormValid(true)
    } else {
      setFormValid(false);
    }
  }, [username, password])

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(username, password);
    // console.log({username, password});
  }


  return (<div>
    <form >
        <input id="username-input" value={username} onChange={e => setUsername(e.target.value)} type="text" />
        <input id="password-input" value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <button onClick={submitForm} disabled={!formValid} id="login-button">Submit</button>
    </form>
  </div>);
}
