import React, { useState, useEffect } from "react";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import Announcement from "../components/table/Announcement";
import Filter from "../components/filter/Filter";
import { getCompanyNames, getTitles } from "./helper/RequestHelper";

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [companiesName, setCompaniesName] = useState([]);

  useEffect(() => {
    getTitles("Всі").then((data) => setAnnouncements(data));
    getCompanyNames().then((data) => setCompaniesName(data));
  }, []);

  function onFilterChange(e) {
    var index = e.target.selectedIndex;
    getTitles(e.target[index].text).then((data) => setAnnouncements(data));
  }

  return (
    <>
      <ApplicationHeader />
      <div className="container w-75">
        <div>
          <h3 className="py-3">Список оголошень що потребують перевірки</h3>
          <Filter
            label={"Назва організатора"}
            data={companiesName}
            change={onFilterChange}
          />
        </div>
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
            {announcements.map((announcement, index) => (
              <Announcement announcement={announcement} link={""} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AnnouncementList;
