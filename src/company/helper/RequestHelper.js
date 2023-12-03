const url = "http://localhost:8080/api/company";

export const getTitles = async () => {
  const titles = await fetch(`${url}/names`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
  return titles;
};

export const getCompany = async (id) => {
  const company = await fetch(`${url}/${id}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
  return company;
};

export const createCompany = async (data) => {
  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
};

export const editCompany = async (data, id) => {
  await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
};

export const deleteCompany = async (id) => {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
};
