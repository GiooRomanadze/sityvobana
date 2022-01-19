const apiCall = async (method, target, body) => {
  const response = await fetch(`/api/${target}`, { method, body: JSON.stringify(body) });
  return response.json();
};

export const apiGet = async (target) => await apiCall("GET", target);
