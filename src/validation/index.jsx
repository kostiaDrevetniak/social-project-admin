import ApplicationHeader from "../components/menu/ApplicationHeader";
import ValidationForm from "./ValidationForm";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Validation = () => {
  const pathParam = useParams();

  console.log(pathParam.id);

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

  const [data, setData] = useState({
    lable: lable,
    text: text,
    categories: [],
    organizer: "Молодіжний центр Тернополя",
    location: "Народний дім дім перемога",
    startDate: "2023-05-27T14:00",
    price: "0",
    href: "https://cutt.ly/a4Huoe6",
  });

  return (
    <>
      <ApplicationHeader />
      <ValidationForm data={data} categories={categories} setData={setData} />
    </>
  );
};

export default Validation;
