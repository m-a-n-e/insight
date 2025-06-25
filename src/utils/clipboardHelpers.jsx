// src/utils/clipboardHelpers.js

export const exportToClipboard = (data) => {
  try {
    const dataString = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(dataString);
    alert('Ideias copiadas para a área de transferência!');
  } catch (error) {
    console.error('Falha ao copiar para a área de transferência:', error);
    alert('Não foi possível copiar as ideias.');
  }
};

export const importFromClipboard = async () => {
  try {
    const text = await navigator.clipboard.readText();
    if (!text) {
      alert('A área de transferência está vazia.');
      return [];
    }
    const parsedData = JSON.parse(text);
    if (Array.isArray(parsedData)) {
      alert('Ideias importadas com sucesso! Atualize a página para ver as mudanças.');
      return parsedData;
    } else {
      alert('O conteúdo da área de transferência não é um formato de lista de ideias válido.');
      return [];
    }
  } catch (error) {
    console.error('Falha ao importar da área de transferência:', error);
    alert('O conteúdo da área de transferência não é um JSON válido.');
    return [];
  }
};
