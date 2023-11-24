import React from "react";
import { Link } from "react-router-dom";

const Anouncment = ({ anouncment }) => {
  return (
    <tr>
      <td>{anouncment.id}</td>
      <td>{anouncment.lable}</td>
      <td>{anouncment.organizer}</td>
      <td>{anouncment.creationDate}</td>
      <td>{anouncment.startDate}</td>
      <td>
        <Link to={"/validation/" + anouncment.id} id={anouncment.id}>
          <button className="btn btn-info">Переглянути</button>
        </Link>
      </td>
    </tr>
  );
};

export default Anouncment;
