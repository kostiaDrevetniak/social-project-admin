import React from "react";
import TextField from "../components/form/field/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import PasswordField from "../components/form/field/PasswordField";

const login = async (data) => {
  const answer = await fetch(
    "http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }
  ).then((response) => response.json());
  return answer;
}

const AuthenticationPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    login(data).then((response) => {
      window.sessionStorage.setItem("token", response.token);
      window.sessionStorage.setItem("role", response.role);
    });    
    navigate(0);
  }

  return (
    <div className="d-flex align-items-center vh-100 ">
      <div className="container w-75 h-75">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <h2>Авторизуйтесь</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)} className="form w-25">
            <TextField label="Логін" {...register("username")} />
            <PasswordField label="Пароль" {...register("password")} />
            <div className="form-group my-2">
              <input
                type="submit"
                value="Авторизуватись"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
