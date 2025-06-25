// src/utils/validationHelpers.js

export const validateIdea = (idea) => {
  if (!idea.title || idea.title.trim() === '') {
    alert('O campo "Título" é obrigatório.');
    return false;
  }
  return true;
};
