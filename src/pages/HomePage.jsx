import React, { useState, useEffect } from 'react';
import IdeaCard from '../components/IdeaCard';
import { Link } from 'react-router-dom';
import { getIdeas, createIdea } from '../api/ideasApi';
import { exportToClipboard, importFromClipboard } from '../utils/clipboardHelpers';

function HomePage() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const data = await getIdeas();
        setIdeas(data.sort((a, b) => b.id - a.id));
      } catch (error) {
        console.error("Erro ao buscar ideias:", error);
        alert('Não foi possível carregar as ideias.');
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  const handleExport = () => {
    exportToClipboard(ideas);
  };

  const handleImport = async () => {
    const importedIdeas = await importFromClipboard();

    if (importedIdeas.length > 0) {
      setLoading(true);
      try {
        await Promise.all(
          importedIdeas.map(idea =>
            createIdea({
              title: idea.title,
              tags: idea.tags,
              description: idea.description,
            })
          )
        );
        const updatedData = await getIdeas();
        setIdeas(updatedData.sort((a, b) => b.id - a.id));
        alert('Ideias importadas e salvas no servidor com sucesso!');
      } catch (error) {
        console.error("Erro ao importar ideias:", error);
        alert('Ocorreu um erro ao salvar as ideias importadas.');
      } finally {
        setLoading(false);
      }
    }
  };


  if (loading) {
    return <div className="p-10 text-center text-gray-500">Carregando ideias...</div>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-950">Minhas Ideias</h1>
        <div className="flex gap-2">
          <button
            onClick={handleImport}
            className="bg-white text-blue-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-700 font-bold py-2 px-3 rounded text-sm transition-colors"
          >
            Importar
          </button>
          <button
            onClick={handleExport}
            className="bg-white text-blue-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-700 font-bold py-2 px-3 rounded text-sm transition-colors"
          >
            Exportar
          </button>
          <Link
            to="/new"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-600 hover:border-blue-700 transition-colors text-sm flex items-center"
          >
            Nova Ideia
          </Link>
        </div>
      </div>
      {ideas.length === 0 ? (
        <div className="text-center p-10 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-950">Nenhuma ideia encontrada. Que tal adicionar uma?</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ideas.map(idea => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
