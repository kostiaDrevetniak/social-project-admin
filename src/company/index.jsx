import React, { useEffect, useState } from "react";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import { Link, useNavigate } from "react-router-dom";
import Company from "../components/table/Company";
import { deleteCompany, getTitles } from "./helper/RequestHelper";

const CompaniesList = () => {
  const [companies, setCompany] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getTitles().then((data) => setCompany(data));
  }, []);

  const callDelete = (id) => {
    deleteCompany(id).then(() => navigate(0));
  }

  return (
    <>
      <ApplicationHeader />
      <div className="container w-75">
        <h3 className="py-3">Список усіх організацій</h3>
        <button onClick={() => navigate("create")} className="btn btn-info">
          Створити
        </button>
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>Id</th>
              <th>Назва</th>
              <th>Операції</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <Company company={company}>
                <>
                  <Link to={"" + company.id}>
                    <button className="btn btn-info me-2">Переглянути</button>
                  </Link>
                  <input
                    type="button"
                    value="Видалити"
                    className="btn btn-danger"
                    onClick={() => callDelete(company.id)}
                  />
                </>
              </Company>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompaniesList;
