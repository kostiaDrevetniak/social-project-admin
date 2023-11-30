import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../helper/RequestHelper";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import AnnouncementForm from "../components/form/AnnouncementForm";

const CreateAnnouncement = () => {
  const navigate = useNavigate("");
  const basePage = "/announcement";

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // getAnnouncement(pathParam.id).then((data) => setAnnouncement(data));
    getAllCategories().then((data) => setCategories(data));
  }, []);

  function onSubmit(data) {
    console.log(data);
    data.id = "";
    // createAnnouncement(data);
    navigate(basePage);
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
