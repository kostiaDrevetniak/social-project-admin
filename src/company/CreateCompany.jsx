import React from "react";
import { useNavigate } from "react-router-dom";
import { createCompany } from "./helper/RequestHelper";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import CompanyForm from "../components/form/CompanyForm";

const CreateCompany = () => {
  const navigate = useNavigate();
  const basePage = "/companies";

  function onSubmit(data) {
    data.id = "";
    createCompany(data).then(() => navigate(basePage));
  }

  return (
    <>
      <ApplicationHeader />
      <CompanyForm
        data={{ logo: "" }}
        onSubmit={onSubmit}
        basePage={basePage}
      />
    </>
  );
};

export default CreateCompany;
