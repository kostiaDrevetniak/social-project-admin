import React from "react";

const Announcement = ({ announcement, children}) => {
  return (
    <tr>
      <td>{announcement.id}</td>
      <td>{announcement.label}</td>
      <td>{announcement.companyName}</td>
      <td>{announcement.creationDate}</td>
      <td>{announcement.startDate}</td>
      <td>
        {children}
      </td>
    </tr>
  );
};

export default Announcement;
