const requestClipboardPermission = async () => {
  try {
    const permission = await navigator.permissions.query({ name: 'clipboard-read' });
    if (permission.state === 'granted' || permission.state === 'prompt') {
      return true;
    } else {
      alert('Permissão para acessar a área de transferência negada.');
      return false;
    }
  } catch (error) {
    console.error('Erro ao solicitar permissão para a área de transferência:', error);
    alert('Não foi possível solicitar permissão para a área de transferência.');
    return false;
  }
};

export const exportToClipboard = async (data) => {
  try {
    const hasPermission = await requestClipboardPermission();
    if (!hasPermission) return;

    const dataString = JSON.stringify(data, null, 2);
    await navigator.clipboard.writeText(dataString);
    alert('Ideias copiadas para a área de transferência!');
  } catch (error) {
    console.error('Falha ao copiar para a área de transferência:', error);
    alert('Não foi possível copiar as ideias.');
  }
};

export const importFromClipboard = async () => {
  try {
    const hasPermission = await requestClipboardPermission();
    if (!hasPermission) return [];

    const text = await navigator.clipboard.readText();
    if (!text) {
      alert('A área de transferência está vazia.');
      return [];
    }
    const parsedData = JSON.parse(text);
    if (Array.isArray(parsedData)) {
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
