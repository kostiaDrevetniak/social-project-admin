const uncheckedAnnouncementUrl =
  "http://localhost:8080/api/announcement/unchecked";

export const createAnnouncement = async (data) => {
  await fetch("http://localhost:8080/api/announcement/checked", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
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
  await fetch(`${uncheckedAnnouncementUrl}/${id}`, {
    method: "DELETE",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  });
};
