import ApplicationHeader from "../components/menu/ApplicationHeader";
import ValidationForm from "./ValidationForm";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

async function getAnnouncement(id) {
  let announcement;
  await fetch("http://localhost:8080/api/announcement/unchecked/" + id)
    .then((response) => response.json())
    .then((data) => (announcement = data));
  return announcement;
}

const Validation = () => {
  const pathParam = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    getAnnouncement(pathParam.id).then((data) => setData(data));
  }, []);

  console.log(data);

  const [categories, setCategories] = useState([
    { value: "робота", label: "Робота" },
    { value: "навчання", label: "Навчання" },
    { value: "обмін", label: "Обмін" },
    { value: "література", label: "Література" },
    { value: "розваги", label: "Розваги" },
  ]);

  return (
    <>
      <ApplicationHeader />
      <ValidationForm data={data} categories={categories} setData={setData} />
    </>
  );
};

export default Validation;
