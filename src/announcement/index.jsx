import React from "react";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import Announcement from "../components/table/Announcement";

const Announcements = () => {
  const data = [
    {
      id: 1,
      label: "День кар'єри",
      organizer: "Молодіжний центр",
      creationDate: "2023-05-20T14:00",
      startDate: "2023-05-27T14:00",
    },
    {
      id: 1,
      label: "День кар'єри",
      organizer: "Молодіжний центр",
      creationDate: "2023-05-20T14:00",
      startDate: "2023-05-27T14:00",
    },
    {
      id: 1,
      label: "День кар'єри",
      organizer: "Молодіжний центр",
      creationDate: "2023-05-20T14:00",
      startDate: "2023-05-27T14:00",
    },
  ];

  return (
    <>
      <ApplicationHeader />
      <div className="container w-75">
        <h3 className="py-3">Список усіх оголошень</h3>
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
            {data.map((announcement) => (
              <Announcement announcement={announcement} link={""} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Announcements;
