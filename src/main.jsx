// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Importa o CSS principal que carrega os estilos do Tailwind
import './index.css';

// Renderiza o componente <App> na div com id="root" do index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
