import React, { useState, useEffect } from "react";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import Announcement from "../components/table/Announcement";

async function getTitles() {
  let titles;
  await fetch("http://localhost:8080/api/announcement/unchecked")
    .then((response) => response.json())
    .then((data) => (titles = data));
  return titles;
}

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getTitles().then((data) => setAnnouncements(data));
  }, []);

  return (
    <>
      <ApplicationHeader />
      <div className="container w-75">
        <h3 className="py-3">Список оголошень що потребують перевірки</h3>
        <table className="table">
          <thead>
            <tr className="text-center">
              <th colSpan={2}>Id</th>
              <th>Організатор</th>
              <th colSpan={2}>Дата створення</th>
              <th>Операції</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {announcements.map((announcement) => (
              <Announcement announcement={announcement} link={""} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AnnouncementList;
