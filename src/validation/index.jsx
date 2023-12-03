import React, { useState, useEffect } from "react";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import Announcement from "../components/table/Announcement";
import Filter from "../components/filter/Filter";
import { deleteAnnouncement, getTitles } from "./helper/RequestHelper";
import { Link, useNavigate } from "react-router-dom";
import { getCompanyNames } from "../helper/RequestHelper";

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [companiesName, setCompaniesName] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTitles("").then((data) => setAnnouncements(data));
    getCompanyNames().then((data) => setCompaniesName(data));
  }, []);

  function onFilterChange(e) {
    const id = e.target.value;
    getTitles(id).then((data) => setAnnouncements(data));
  }

  const callDelete = (id) => {
    deleteAnnouncement(id).then(() => navigate(0));
  };

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
              <Announcement announcement={announcement} key={index}>
                <>
                  <Link to={"" + announcement.id}>
                    <button className="btn btn-info me-2">Переглянути</button>
                  </Link>
                  <input
                    type="button"
                    value="Видалити"
                    className="btn btn-danger"
                    onClick={() => callDelete(announcement.id)}
                  />
                </>
              </Announcement>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AnnouncementList;
