// src/pages/NewIdeaPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import IdeaForm from '../components/IdeaForm';
import { createIdea } from '../api/ideasApi';
import { validateIdea } from '../utils/validationHelpers';

function NewIdeaPage() {
  const navigate = useNavigate();

  // Função que será chamada pelo formulário ao salvar
  const handleSave = async (ideaData) => {
    // Primeiro, valida os dados
    if (!validateIdea(ideaData)) {
      return; // Para a execução se for inválido
    }
    // Se for válido, chama a API para criar
    try {
      await createIdea(ideaData);
      navigate('/'); // Navega de volta para a home
    } catch (error) {
      console.error("Erro:", error);
      alert("Falha ao salvar a ideia.");
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-950">Adicionar Nova Ideia</h1>
      <IdeaForm onSave={handleSave} onBack={() => navigate(-1)} />
    </div>
  );
}

export default NewIdeaPage;
