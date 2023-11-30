import ApplicationHeader from "../components/menu/ApplicationHeader";
import ValidationForm from "./ValidationForm";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllCategories, getAnnouncement } from "./helper/RequestHelper";



const Validation = () => {
  const pathParam = useParams();

  const [announcement, setAnnouncement] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAnnouncement(pathParam.id).then((data) => setAnnouncement(data));
    getAllCategories().then((data) => setCategories(data));
  }, []);

  return (
    <>
      <ApplicationHeader />
      <ValidationForm
        data={announcement}
        categories={categories}
        setData={setAnnouncement}
      />
    </>
  );
};

export default Validation;
