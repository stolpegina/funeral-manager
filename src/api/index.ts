import { Company } from "../types/company";
import { Contact } from "../types/contact";

export const auth = (username: string) => {
  const response = fetch(`/auth?user=${username}`, {
    method: "GET",
  });
  return response;
};

export const getCompany = (id: string) => {
  const response = fetch(`/companies/${id}`, {
    method: "GET",
    headers: getResponseHeaders(),
  });
  return response;
};

export const updateCompany = (
  id: string,
  data: Pick<Company, "name" | "shortName" | "businessEntity" | "type">
) => {
  const response = fetch(`/companies/${id}`, {
    method: "PATCH",
    headers: getResponseHeaders(),
    body: JSON.stringify(data),
  });
  return response;
};

export const deleteCompany = (id: string) => {
  const response = fetch(`/companies/${id}`, {
    method: "DELETE",
    headers: getResponseHeaders(),
  });
  return response;
};

export const getContacts = (id: string) => {
  const response = fetch(`/contacts/${id}`, {
    method: "GET",
    headers: getResponseHeaders(),
  });
  return response;
};

export const updateContacts = (id: string, data: Omit<Contact, "id">) => {
  const response = fetch(`/contacts/${id}`, {
    method: "PATCH",
    headers: getResponseHeaders(),
    body: JSON.stringify(data),
  });
  return response;
};

export const addImage = (id: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = fetch(`/companies/${id}/image`, {
    method: "POST",
    headers: { Authorization: getResponseHeaders().Authorization },
    body: formData,
  });
  return response;
};

export const deleteImage = (id: string, imageName: string) => {
  const response = fetch(`/companies/${id}/image/${imageName}`, {
    method: "DELETE",
    headers: getResponseHeaders(),
  });
  return response;
};

const getResponseHeaders = () => ({
  Authorization: sessionStorage.getItem("tokenData") ?? "",
  "Content-Type": "application/json",
});
