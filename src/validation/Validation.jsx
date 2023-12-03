import ApplicationHeader from "../components/menu/ApplicationHeader";
import AnnouncementForm from "../components/form/AnnouncementForm";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createAnnouncement, getAnnouncement } from "./helper/RequestHelper";
import { getAllCategories } from "../helper/RequestHelper";

const Validation = () => {
  const pathParam = useParams();
  const navigate = useNavigate();
  const basePage = "/validation";

  const [announcement, setAnnouncement] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAnnouncement(pathParam.id).then((data) => setAnnouncement(data));
    getAllCategories().then((data) => setCategories(data));
  }, [pathParam.id]);

  function onSubmit(data) {
    data.id = "";
    createAnnouncement(data).then(() => navigate(basePage));
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

export default Validation;
