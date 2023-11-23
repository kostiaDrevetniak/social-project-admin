import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import CategorySelector from "../components/CategorySelector";

function ValidationForm() {
  const [lable, setLable] = useState("День кар'єри");
  const [text, setText] = useState(
    "Настав час знайти собі роботу! \n\n" +
      "І Молодіжний Центр може вам з цим допомогти, адже зовсім скоро відбудеться День Кар'єри!\n\n" +
      "Чого очікувати від заходу?\n\n" +
      "🔸можливості поспілкуватися з представниками різноманітних підприємств \n" +
      "🔸лекції від спікерів, чиї імена ми незабаром повідомимо \n" +
      "🔸проведення часу в колі однодумців \n\n" +
      "📅 27 квітня, 14:00\n" +
      '📍Український дім "Перемога"\n\n' +
      "Вхід вільний\n\n" +
      "Обов'язкова попередня реєстрація❗️\n\n" +
      "Посилання на форму👇🏻\n" +
      "https://cutt.ly/a4Huoe6\n\n" +
      "#ДК2023"
  );

  const [categories, setCategories] = useState([
    { value: "робота", label: "Робота" },
    { value: "навчання", label: "Навчання" },
    { value: "обмін", label: "Обмін" },
    { value: "література", label: "Література" },
    { value: "розваги", label: "Розваги" },
  ]);

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: {
      lable: lable,
      text: text,
      categories: [],
    },
  });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField lable="Заголовок" {...register("lable")} />
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
      <input type="submit" value="Записати" />
    </form>
  );
}

export default ValidationForm;
