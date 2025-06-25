// src/components/IdeaCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TagButton from './TagButton';

function IdeaCard({ idea }) {
  const tags = idea.tags ? idea.tags.split(',').map(tag => tag.trim()) : [];

  return (
    <div className="border border-gray-200 bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-bold mb-2 text-gray-950">{idea.title}</h2>
      <div className="mb-4">
        {tags.map((tag, index) => (
          <TagButton key={index} text={tag} />
        ))}
      </div>
      <Link 
        to={`/idea/${idea.id}`} 
        className="text-gray-950 hover:underline"
      >
        Ver Detalhes
      </Link>
    </div>
  );
}

export default IdeaCard;
