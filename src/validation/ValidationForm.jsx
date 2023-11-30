import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "../components/form/TextField";
import TextArea from "../components/form/TextArea";
import CategorySelector from "../components/form/CategorySelector";
import DateTimeInput from "../components/form/DateTimeField";
import CurrencyField from "../components/form/CurrencyField";
import { useNavigate } from "react-router";
import ImageField from "../components/form/ImageField";
import { createAnnouncement, deleteAnnouncement } from "./helper/RequestHelper";

function ValidationForm({ data, categories, setData }) {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, control, setValue } = useForm({});

  useEffect(() => {
    console.log(data);
    reset(data);
  }, []);

  function onSubmit(data) {
    console.log(data);
    data.id = "";
    createAnnouncement(data);
    navigate("/validation");
  }

  function returnToPreviousPage() {
    navigate("/validation");
  }

  const callDelete = () => {
    deleteAnnouncement(data.id);
    returnToPreviousPage();
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
          <TextArea
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
          <CategorySelector
            label="Категорії"
            categories={categories}
            {...register("categories")}
            control={control}
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
            <button
              onClick={callDelete}
              type="button"
              className="btn btn-outline-danger mx-1"
            >
              Видалити
            </button>
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
