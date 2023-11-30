import React from "react";
import { useForm } from "react-hook-form";
import TextField from "./field/TextField";
import TextAreaField from "./field/TextAreaField";
import CategoryField from "./field/CategoryField";
import DateTimeInput from "./field/DateTimeField";
import CurrencyField from "./field/CurrencyField";
import { useNavigate } from "react-router";
import ImageField from "./field/ImageField";

function AnnouncementForm({ data, categories, basePage, onSubmit }) {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, control, setValue } = useForm({
    defaultValues: data,
  });

  function returnToPreviousPage() {
    navigate(basePage);
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

export default AnnouncementForm;
