import ApplicationHeader from "../components/menu/ApplicationHeader";
import AnnouncementForm from "../components/form/AnnouncementForm";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllCategories, getAnnouncement } from "./helper/RequestHelper";

const Validation = () => {
  const pathParam = useParams();

  const [announcement, setAnnouncement] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAnnouncement(pathParam.id).then((data) => setAnnouncement(data));
    getAllCategories().then((data) => setCategories(data));
  }, [pathParam.id]);

  return (
    announcement && (
      <>
        <ApplicationHeader />
        <AnnouncementForm
          data={announcement}
          categories={categories}
          basePage={"/validation"}
        />
      </>
    )
  );
};

export default Validation;
