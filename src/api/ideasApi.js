// src/api/ideasApi.js

const API_URL = 'http://localhost:3001/ideas';

export const getIdeas = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Falha ao buscar ideias.');
  }
  return response.json();
};

export const getIdeaById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Falha ao buscar a ideia.');
  }
  return response.json();
};

export const createIdea = async (idea) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(idea),
  });
  if (!response.ok) {
    throw new Error('Falha ao criar a ideia.');
  }
  return response.json();
};

export const updateIdea = async (id, idea) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(idea),
  });
  if (!response.ok) {
    throw new Error('Falha ao atualizar a ideia.');
  }
  return response.json();
};

export const deleteIdea = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Falha ao deletar a ideia.');
  }
  return response.json();
};
