import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../components/form/TextField";
import TextArea from "../components/form/TextArea";
import CategorySelector from "../components/form/CategorySelector";
import DateTimeInput from "../components/form/DateTimeField";
import CurencyField from "../components/form/CurencyField";
import { useNavigate } from "react-router";

function ValidationForm({ data, categories, setData }) {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: data,
  });

  function onSubmit(data) {
    console.log(data);
    setData(data);
    navigate("/validation");
    // reset(data);
  }

  return (
    <div className="container ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form d-flex justify-content-between"
      >
        <div>
          <TextField label="Заголовок" {...register("lable")} />
          <TextField label="Організатор" {...register("organizer")} />
          <TextArea
            lable="Текст оголошення"
            rows="27"
            cols="70"
            {...register("text")}
          />
        </div>
        <div className="d-flex flex-column w-50">
          <div className="d-flex justify-content-center">
            <img src="../logo512.png" width={400} height={400} />
          </div>
          <TextField label="Локація" {...register("location")} />
          <DateTimeInput
            label="Дата і час проведення"
            {...register("startDate")}
          />
          <CurencyField label="Ціна участі" {...register("price")} />
          <TextField label="Посилання для реєстрації" {...register("href")} />
          <CategorySelector
            label="Категорії"
            categories={categories}
            {...register("categories")}
            control={control}
          />
          <div> 
            <input type="submit" value="Записати" className="btn btn-outline-primary mx-2"/>
            <button onClick={console.log("delete")} className="btn btn-outline-danger mx-1">Видалити</button>
            <button onClick={useNavigate("/validation")} className="btn btn-outline-secondary mx-2">Повернутись</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ValidationForm;
