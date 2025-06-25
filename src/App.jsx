// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa os componentes e páginas
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NewIdeaPage from './pages/NewIdeaPage';
import IdeaDetailPage from './pages/IdeaDetailPage';
import NotFoundPage from './pages/NotFoundPage';

// Componente principal que organiza as rotas
function App() {
  return (
    // O Router deve envolver toda a aplicação
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          {/* O Routes define qual componente renderizar com base na URL */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<NewIdeaPage />} />
            <Route path="/idea/:id" element={<IdeaDetailPage />} />
            {/* Rota para qualquer outra URL não encontrada */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
