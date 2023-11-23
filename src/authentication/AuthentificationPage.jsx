import React from "react";
import ApplicationHeader from "../components/menu/ApplicationHeader";
import TextField from "../components/form/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const AuthentificationPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);
    navigate("/main")
    reset();
  }

  return (
    <>
      {/* <ApplicationHeader /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Логін" {...register("loggin")}/>
        <TextField label="Пароль" {...register("password")}/>
        <input type="submit" value="Авторизуватись" />
      </form>
    </>
  );
};

export default AuthentificationPage;
