export const auth = (username) => {
  const response = fetch(`/auth?user=${username}`, {
    method: "GET",
  });
  return response;
};

const token = sessionStorage.getItem("tokenData");

export const getCompany = (id) => {
  const response = fetch(`/companies/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return response;
};

//TODO: не работает обновление даты договора

export const updateCompany = (id, data) => {
  const response = fetch(`/companies/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const deleteCompany = (id) => {
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
  const response = fetch(`/contacts/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const updateContacts = (id, data) => {
  const response = fetch(`/contacts/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

//TODO: посмотреть запрос на добавление

export const addImage = (id) => {
  const response = fetch(`/contacts/${id}/image`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const deleteImage = (id, imageName) => {
  const response = fetch(`/companies/${id}/image/${imageName}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  return response;
};
