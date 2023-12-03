import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../helper/RequestHelper";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import AnnouncementForm from "../components/form/AnnouncementForm";
import { createAnnouncement } from "./helper/RequestHelper";

const CreateAnnouncement = () => {
  const navigate = useNavigate();
  const basePage = "/announcements";

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  function onSubmit(data) {
    console.log(data);
    data.id = "";
    createAnnouncement(data).then(() => navigate(basePage));
  }

  return (
    <>
      <ApplicationHeader />
      <AnnouncementForm
        data={{image: ""}}
        categories={categories}
        basePage={basePage}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default CreateAnnouncement;
