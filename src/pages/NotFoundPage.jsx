import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IdeaForm from '../components/IdeaForm';
import { getIdeaById, updateIdea, deleteIdea } from '../api/ideasApi';
import { validateIdea } from '../utils/validationHelpers';

function IdeaDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIdea = async () => {
      try {
        const data = await getIdeaById(id);
        setIdea(data);
      } catch (error) {
        console.error("Erro:", error);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };
    fetchIdea();
  }, [id, navigate]);

  const handleUpdate = async (ideaData) => {
    if (!validateIdea(ideaData)) return;
    try {
      await updateIdea(id, ideaData);
      alert('Ideia atualizada!');
      navigate('/');
    } catch (error) {
      console.error("Erro:", error);
      alert('Falha ao atualizar.');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Tem certeza que deseja apagar esta ideia?')) {
      try {
        await deleteIdea(id);
        alert('Ideia apagada!');
        navigate('/');
      } catch (error) {
        console.error("Erro:", error);
        alert('Falha ao apagar.');
      }
    }
  };

  if (loading) return <div className="p-10 text-center">Carregando...</div>;
  if (!idea) return null;

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Editar Ideia</h1>
      <IdeaForm
        initialIdea={idea}
        onSave={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default IdeaDetailPage;
