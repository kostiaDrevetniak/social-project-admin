import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../components/form/TextField";
import TextArea from "../components/form/TextArea";
import CategorySelector from "../components/form/CategorySelector";
import DateTimeInput from "../components/form/DateTimeField";
import CurencyField from "../components/form/CurencyField";

function ValidationForm({ data, categories, setData }) {

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: data
  });

  function onSubmit(data) {
    console.log(data);
    setData(data);
    reset(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Заголовок" {...register("lable")} />
      <TextArea
        lable="Текст оголошення"
        rows="40"
        cols="70"
        {...register("text")}
      />
      <CategorySelector
        categories={categories}
        {...register("categories")}
        control={control}
      />
      <TextField label="Організатор" {...register("organizer")}/>
      <TextField label="Локація" {...register("location")}/>
      <DateTimeInput label="Дата і час проведення" {...register("startDate")}/>
      <CurencyField label="Ціна участі" {...register("price")}/>
      <TextField label="Посилання для реєстрації" {...register("href")}/>
      <input type="submit" value="Записати" />
    </form>
  );
}

export default ValidationForm;
