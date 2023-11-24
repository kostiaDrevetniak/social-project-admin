import React from "react";
import { Link } from "react-router-dom";

const Announcement = ({ announcement, link }) => {
  return (
    <tr>
      <td>{announcement.id}</td>
      <td>{announcement.label}</td>
      <td>{announcement.organizer}</td>
      <td>{announcement.creationDate}</td>
      <td>{announcement.startDate}</td>
      <td>
        <Link to={link + announcement.id}>
          <button className="btn btn-info">Переглянути</button>
        </Link>
      </td>
    </tr>
  );
};

export default Announcement;
