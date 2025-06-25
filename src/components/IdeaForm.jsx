import React, { useState } from 'react';

function IdeaForm({ onSave, initialIdea = { title: '', tags: '', description: '' }, onDelete, onBack }) {
  const [idea, setIdea] = useState(() => initialIdea);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setIdea(prevIdea => ({ ...prevIdea, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSave(idea);
  };

  return (

    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow border border-gray-200">

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-950">
          Título da Ideia
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={idea.title}
          onChange={handleChange} 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-950">
          Tags (separadas por vírgula)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={idea.tags}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-950">
          Descrição
        </label>
        <textarea
          id="description"
          name="description"
          value={idea.description}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <div className="flex justify-between items-center gap-2">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Salvar Ideia
        </button>
        <div className="flex gap-2">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Voltar
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Deletar
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default IdeaForm;
