import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "../components/form/TextField";
import TextArea from "../components/form/TextArea";
import CategorySelector from "../components/form/CategorySelector";
import DateTimeInput from "../components/form/DateTimeField";
import CurrencyField from "../components/form/CurrencyField";
import { useNavigate } from "react-router";

function ValidationForm({ data, categories, setData }) {
  const navigate = useNavigate();

console.log(data);

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: data,
  });

  useEffect(() => {
    reset(data);
  }, []);

  console.log(data);

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
          <TextField label="Заголовок" {...register("label")} />
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
            <img src="../logo512.png" width={400} height={400} alt="Зображення оголошення"/>
          </div>
          <TextField label="Локація" {...register("location")} />
          <DateTimeInput
            label="Дата і час проведення"
            {...register("startDate")}
          />
          <CurrencyField label="Ціна участі" {...register("price")} />
          <TextField label="Посилання для реєстрації" {...register("href")} />
          <CategorySelector
            label="Категорії"
            categories={categories}
            {...register("categories")}
            control={control}
          />
          <div>
            <input
              type="submit"
              value="Записати"
              className="btn btn-outline-primary mx-2"
            />
            <button
              onClick={console.log("delete")}
              className="btn btn-outline-danger mx-1"
            >
              Видалити
            </button>
            <button
              onClick={useNavigate("/validation")}
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
