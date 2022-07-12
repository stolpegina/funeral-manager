export const auth = (username) => {
  const response = fetch(`/auth?user=${username}`, {
    method: "GET",
  });
  return response;
};

export const getCompanies = () => {
  const token = sessionStorage.getItem('tokenData');
  const response = fetch(`/companies`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return response;
}
