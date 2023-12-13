import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCompany, getCompany } from "./helper/RequestHelper";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import CompanyForm from "../components/form/CompanyForm";

const EditCompany = () => {
  const pathParam = useParams();
  const navigate = useNavigate();
  const basePage = "/companies";

  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany(pathParam.id).then((data) => {
      setCompany(data);
    });
  }, [pathParam.id]);

  function onSubmit(data) {
    data.id = "";
    editCompany(data, pathParam.id).then(() => navigate(basePage));
  }

  return (
    company && (
      <>
        <ApplicationHeader />
        <CompanyForm data={company} onSubmit={onSubmit} basePage={basePage} />
      </>
    )
  );
};

export default EditCompany;
