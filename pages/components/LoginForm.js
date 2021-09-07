import axios from "axios";
import React, { useState } from 'react'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

         const authObject = {
           "Project-ID": "241084c2-2069-445d-afc1-cee8f51a49b9",
           "User-Name": username,
           "User-Secret": password,
        };
        
        try {
             //username and password from chatEngine API
            await axios.get("https://api.chatengine.io/chats", {
             headers: authObject,
           });

           //saving the username and password on the loacalStorage
           localStorage.setItem("username", username);
           localStorage.setItem("password", password);

           window.location.reload();
           setError("");
         } catch (err) {
           setError("Oops, incorrect credentials.");
         }
    }

    return (
      <div className="wrapper">
        <div className="form">
          <h1 className="title">Saiicodes Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              required
            />
            <div align="center">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
            </div>
            <h2 className="error">{error}</h2>
          </form>
        </div>
      </div>
    );
}

export default LoginForm
