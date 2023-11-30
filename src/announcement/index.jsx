import React, { useState, useEffect } from "react";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import Announcement from "../components/table/Announcement";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../components/filter/Filter";
import { getCompanyNames } from "../helper/RequestHelper";

const Announcements = () => {
  const navigate = useNavigate("");

  const [announcements, setAnnouncements] = useState([]);
  const [companiesName, setCompaniesName] = useState([]);

  useEffect(() => {
    getCompanyNames().then((data) => setCompaniesName(data));

    setAnnouncements([
      {
        id: 1,
        title: "День кар'єри",
        companyName: "Молодіжний центр",
        creationDate: "2023-05-20T14:00",
        startDate: "2023-05-27T14:00",
      },
      {
        id: 1,
        title: "День кар'єри",
        companyName: "Молодіжний центр",
        creationDate: "2023-05-20T14:00",
        startDate: "2023-05-27T14:00",
      },
      {
        id: 1,
        title: "День кар'єри",
        companyName: "Молодіжний центр",
        creationDate: "2023-05-20T14:00",
        startDate: "2023-05-27T14:00",
      },
    ]);
  }, []);

  const onFilterChange = (e) => {
    const value = e.target.value;
    console.log(value);
    // getTitles(e.target[index].text).then((data) => setAnnouncements(data));
  };

  const callDelete = (id) => {
    console.log("delete");
  };

  return (
    <>
      <ApplicationHeader />
      <div className="container w-75">
        <h3 className="py-3">Список усіх оголошень</h3>
        <div className="d-flex justify-content-between">
          <div className="w-100">
          <Filter
            label={"Назва організатора"}
            data={companiesName}
            change={onFilterChange}
          />
          </div>
          <div className="w-25">
          <button
            onClick={() => navigate("create")}
            className="btn btn-info"
          >
            Створити
          </button>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Назва</th>
              <th>Організатор</th>
              <th>Дата створення</th>
              <th>Дата початку</th>
              <th>Операції</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement) => (
              <Announcement announcement={announcement}>
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

export default Announcements;
