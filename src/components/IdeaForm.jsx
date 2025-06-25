// src/components/IdeaForm.jsx
import React, { useState } from 'react';

// Este é o formulário para criar ou editar uma ideia.
// Ele é um componente "controlado", o que significa que o estado do React
// é a "fonte da verdade" para os valores dos inputs.

// Recebe 3 props:
// - onSave: uma função que será chamada quando o formulário for salvo.
// - initialIdea: os dados iniciais da ideia (usado para edição).
// - onDelete: uma função para deletar a ideia (só aparece na edição).
function IdeaForm({ onSave, initialIdea = { title: '', tags: '', description: '' }, onDelete, onBack }) {
  const [idea, setIdea] = useState(() => initialIdea);

  // Função para lidar com mudanças nos inputs (titulo, tags, etc.)
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Atualizamos o estado 'idea' com o novo valor.
    // A sintaxe '[name]: value' permite usar o 'name' do input como a chave do objeto.
    setIdea(prevIdea => ({ ...prevIdea, [name]: value }));
  };

  // Função chamada quando o formulário é enviado.
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página).
    onSave(idea); // Chama a função 'onSave' que recebemos via props.
  };

  return (
    // 'form' é a tag HTML para formulários.
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow border border-gray-200">
      {/* Campo para o Título */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-950">
          Título da Ideia
        </label>
        <input
          type="text"
          id="title"
          name="title" // O 'name' tem que ser igual à chave no estado 'idea'.
          value={idea.title} // O valor do input é controlado pelo nosso estado.
          onChange={handleChange} // Função chamada a cada letra digitada.
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          required // Validação simples do HTML.
        />
      </div>

      {/* Campo para as Tags */}
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

      {/* Campo para a Descrição */}
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

      {/* Botões de Ação */}
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
              type="button" // 'type="button"' para não enviar o formulário.
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
