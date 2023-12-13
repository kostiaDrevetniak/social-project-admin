import React from "react";
import { useNavigate } from "react-router-dom";
import { createCategory } from "./helper/RequestHelper";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import CategoryForm from "../components/form/CategoryForm";

const CreateCategory = () => {
  const navigate = useNavigate();
  const basePage = "/categories";

  function onSubmit(data) {
    data.id = ""
    console.log(data);
    createCategory(data).then((response) => {
      if (response.status === 201) {
        navigate(basePage);
      }
    });
  }

  return (
    <>
      <ApplicationHeader />
      <CategoryForm data={{}} onSubmit={onSubmit} basePage={basePage} />
    </>
  );
};

export default CreateCategory;
