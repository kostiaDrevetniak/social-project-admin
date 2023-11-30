import React, { useState } from "react";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import { Link, useNavigate } from "react-router-dom";
import Company from "../components/table/Company";

const CompaniesList = () => {
  const [companies, setCompany] = useState([]);

  const navigate = useNavigate("");

  const callDelete = (id) => {
    console.log("delete: " + id);
  }

  return (
    <>
      <ApplicationHeader />
      <div className="container w-75">
        <h3 className="py-3">Список усіх оголошень</h3>
        <button onClick={() => navigate("create")} className="btn btn-info">
          Створити
        </button>
        <table className="table">
          <thead>
            <tr>
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
