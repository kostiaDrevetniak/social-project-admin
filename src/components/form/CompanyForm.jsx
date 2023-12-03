import React from "react";
import TextField from "./field/TextField";
import TextAreaField from "./field/TextAreaField";
import { useForm } from "react-hook-form";
import ImageField from "./field/ImageField";
import { useNavigate } from "react-router-dom";
import SelectField from "./field/SelectField";

const CompanyForm = ({ data, onSubmit, basePage }) => {
  const navigate = useNavigate("");

  const type = [
    {id: "SPONSOR", name:"Спонсор"},
    {id: "PARTNER", name:"Партнер"},
  ]

  const { register, handleSubmit, reset, setValue, control } = useForm({
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
        className="my-5"
      >
        <div>
          <TextField label="Назва" {...register("name")} />
          <TextField label="Назва каналу" {...register("channelName")} />
          <TextAreaField
            label="Опис"
            rows="15"
            cols="40"
            {...register("description")}
          />
          <div className="d-flex justify-content-center">
            <ImageField
              imageBytes={data.logo}
              setValue={setValue}
              name={"logo"}
            />
          </div>
            <SelectField label={"Тип компанії"} data={type} name={"type"} control={control}/>
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
};

export default CompanyForm;
