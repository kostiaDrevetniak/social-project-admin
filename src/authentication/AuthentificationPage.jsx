import React from "react";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import TextField from "../components/form/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import PasswordField from "../components/form/PasswordField";

const AuthentificationPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);
    navigate("/main");
    reset();
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
            <TextField label="Логін" {...register("loggin")} />
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

export default AuthentificationPage;
