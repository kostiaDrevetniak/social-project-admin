const url = "http://localhost:8080/api/announcement/checked";

export const createAnnouncement = async (data) => {
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

export const updateAnnouncement = async (data, id) => {
  await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  })
};

export const getAnnouncement = async (id) => {
  const announcement = await fetch(`${url}/${id}`, {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  }).then((response) => response.json());
  console.log(announcement);
  return announcement;
};

export const getTitles = async (companyId) => {
  companyId = companyId === "" ? "/all" : "?company=" + companyId;
  const titles = await fetch(url + companyId, {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  }).then((response) => response.json());
  return titles;
};

export const deleteAnnouncement = async (id) => {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  });
};
