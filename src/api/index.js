export const auth = (username) => {
  const response = fetch(`/auth?user=${username}`, {
    method: "GET",
  });
  return response;
};

export const getCompany = (id) => {
  const token = sessionStorage.getItem('tokenData');
  const response = fetch(`/companies/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return response;
}

export const deleteCompany = (id) => {
  const token = sessionStorage.getItem("tokenData");
  const response = fetch(`/companies/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getContacts = (id) => {
  const token = sessionStorage.getItem("tokenData");
  const response = fetch(`/contacts/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getImages = (id) => {
  const token = sessionStorage.getItem("tokenData");
  const response = fetch(`/contacts/${id}/image`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return response;
};
