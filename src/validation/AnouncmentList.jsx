import React from "react";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import Anouncment from "./components/Anouncment";

const AnouncmentList = () => {
  const anouncments = [
    { id: 0, organizer: "Молодіжний центр", creationDate: "2023-05-20T14:00" },
    { id: 1, organizer: "Молодіжний центр", creationDate: "2023-05-29T14:00" },
    { id: 2, organizer: "Молодіжний центр", creationDate: "2023-05-13T14:00" },
  ];

  return (
    <>
      <ApplicationHeader />
      <div className="container w-75">
        <h3 className="py-3">Список оголошень що потребують перевірки</h3>
      <table className="table">
        <thead>
            <tr>
                <th colSpan={2}>Id</th>
                <th>Організатор</th>
                <th colSpan={2}>Дата створення</th>
                <th>Операції</th>
            </tr>
        </thead>
        <tbody>
          {anouncments.map((anouncment) => (
            <Anouncment anouncment={anouncment} />
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default AnouncmentList;