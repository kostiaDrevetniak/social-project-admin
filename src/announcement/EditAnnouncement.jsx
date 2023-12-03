import ApplicationHeader from "../components/menu/ApplicationHeader";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCategories } from "../helper/RequestHelper";
import AnnouncementForm from "../components/form/AnnouncementForm";
import { getAnnouncement, updateAnnouncement } from "./helper/RequestHelper";

const EditAnnouncement = () => {
  const pathParam = useParams();
  const navigate = useNavigate();
  const basePage = "/announcements"

  const [announcement, setAnnouncement] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAnnouncement(pathParam.id).then((data) => setAnnouncement(data));
    getAllCategories().then((data) => setCategories(data));
  }, [pathParam.id]);

  function onSubmit(data) {
    console.log(data);
    data.id = "";
    updateAnnouncement(data, pathParam.id).then(() => navigate(basePage));
  }

  return (
    announcement && (
      <>
        <ApplicationHeader />
        <AnnouncementForm
          data={announcement}
          categories={categories}
          basePage={basePage}
          onSubmit={onSubmit}
        />
      </>
    )
  );
};

export default EditAnnouncement;
