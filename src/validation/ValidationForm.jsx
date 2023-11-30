import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../components/form/field/TextField";
import TextAreaField from "../components/form/field/TextAreaField";
import CategoryField from "../components/form/field/CategoryField";
import DateTimeInput from "../components/form/field/DateTimeField";
import CurrencyField from "../components/form/field/CurrencyField";
import { useNavigate } from "react-router";
import ImageField from "../components/form/field/ImageField";
import { createAnnouncement } from "./helper/RequestHelper";

function ValidationForm({ data, categories }) {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, control, setValue } = useForm({
    defaultValues: data,
  });

  function onSubmit(data) {
    console.log(data);
    data.id = "";
    createAnnouncement(data);
    navigate("/validation");
  }

  function returnToPreviousPage() {
    navigate("/validation");
  }

  const resetValue = () => {
    console.log("reset");
    reset(data);
  };

  return (
    <div className="container ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form d-flex justify-content-between"
      >
        <div>
          <TextField label="Заголовок" {...register("title")} />
          <TextField label="Організатор" {...register("companyName")} />
          <TextAreaField
            label="Текст оголошення"
            rows="27"
            cols="70"
            {...register("description")}
          />
        </div>
        <div className="d-flex flex-column w-50">
          <div className="d-flex justify-content-center">
            <ImageField imageBytes={data.image} setValue={setValue} />
          </div>
          <CategoryField
            label="Категорії"
            categories={categories}
            control={control}
            {...register("categories")}
          />
          <TextField label="Локація" {...register("location")} />
          <DateTimeInput
            label="Дата і час проведення"
            {...register("startTime")}
          />
          <CurrencyField label="Ціна участі" {...register("price")} />
          <TextField
            label="Посилання для реєстрації"
            {...register("registrationLink")}
          />
          <div>
            <input
              type="submit"
              value="Записати"
              className="btn btn-outline-primary mx-2"
            />
            <input
              type="button"
              onClick={resetValue}
              value={"Скинути"}
              className="btn btn-outline-danger mx-1"
            />
            <button
              type="button"
              onClick={returnToPreviousPage}
              className="btn btn-outline-secondary mx-2"
            >
              Повернутись
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ValidationForm;
