// src/components/TagButton.jsx
import React from 'react';

function TagButton({ text }) {
  return (
    <span className="bg-blue-100 text-gray-950 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
      #{text}
    </span>
  );
}

export default TagButton;
