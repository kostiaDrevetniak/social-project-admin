import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextField from './field/TextField';

const CategoryForm = ({data, basePage, onSubmit}) => {
    const navigate = useNavigate();
  
    const { register, handleSubmit, reset } = useForm({
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

export default CategoryForm