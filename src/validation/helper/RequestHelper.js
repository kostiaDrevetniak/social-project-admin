export const createAnnouncement = async (data) => {
  await fetch("http://localhost:8080/api/announcement/checked", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const getAnnouncement = async (id) => {
  const announcement = await fetch(
    "http://localhost:8080/api/announcement/unchecked/" + id
  ).then((response) => response.json());
  return announcement;
};

export const getTitles = async (companyName) => {
  if (companyName === "Всі") companyName = "/all";
  else companyName = "?company-name=" + companyName;
  let titles;
  await fetch("http://localhost:8080/api/announcement/unchecked" + companyName)
    .then((response) => response.json())
    .then((data) => (titles = data));
  return titles;
};

export const deleteAnnouncement = async (id) => {
  "";
  await fetch("http://localhost:8080/api/announcement/unchecked/" + id, {
    method: "DELETE",
  });
  // .then((response) => console.log(response));
};
