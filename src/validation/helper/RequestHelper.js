const uncheckedAnnouncementUrl =
  "http://localhost:8080/api/announcement/unchecked";

export const createAnnouncement = async (data) => {
  const response = await fetch("http://localhost:8080/api/announcement/checked", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const getAnnouncement = async (id) => {
  const announcement = await fetch(`${uncheckedAnnouncementUrl}/${id}`, {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  }).then((response) => response.json());
  return announcement;
};

export const getTitles = async (companyName) => {
  companyName = companyName === "" ? "/all" : "?company=" + companyName;
  const titles = await fetch(uncheckedAnnouncementUrl + companyName, {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  }).then((response) => response.json());
  return titles;
};

export const deleteAnnouncement = async (id) => {
  console.log(id);
  await fetch(`${uncheckedAnnouncementUrl}/${id}`, {
    method: "DELETE",
    headers: {Authorization: `Bearer ${sessionStorage.getItem("token")}`,}
  });
};
