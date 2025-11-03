"use client";

import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    if (!email.trim() || !password) {
      setMessage("Veuillez renseigner l'email et le mot de passe.");
      return;
    }
    // Remplacez ceci par votre logique d'authentification / appel API
    const payload = { email, password };
    console.log("Tentative de connexion:", payload);
    setMessage("Envoi effectué (exemple).");
    if (typeof onLogin === "function") onLogin(payload);
  }

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f7fb",
    fontFamily: "sans-serif",
  };

  const cardStyle = {
    width: 320,
    padding: 24,
    borderRadius: 8,
    background: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 10px",
    marginTop: 6,
    marginBottom: 12,
    borderRadius: 4,
    border: "1px solid #ddd",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 4,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600,
  };

  const msgStyle = {
    marginTop: 12,
    color: message && message.includes("Veuillez") ? "#b91c1c" : "#065f46",
    fontSize: 14,
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ margin: 0, marginBottom: 10, fontSize: 20 }}>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              placeholder="exemple@domaine.com"
              required
            />
          </label>
          <label>
            Mot de passe
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="••••••••"
              required
            />
          </label>
          <button type="submit" style={buttonStyle}>
            Se connecter
          </button>
        </form>
        {message && <div style={msgStyle}>{message}</div>}
      </div>
    </div>
  );
}
