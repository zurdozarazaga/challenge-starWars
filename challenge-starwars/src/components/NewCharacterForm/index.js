import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCharacterAction } from "../../actions/characterAction";

const NewCharacterForm = () => {
  const dispatch = useDispatch();
  // state for form
  const [windowActive, setWindowActive] = useState(false);
  const {
    register,
    reset,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  
  // handle form submit of React-Hook-Form
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(addCharacterAction(data));
    const {target} = e;
    target.name.value = "";
    target.height.value = "";
    target.birth_year.value = "";
    setWindowActive(!windowActive);
  };
  //handleClick for form 
  const handleClickForm = () => {
    setWindowActive(!windowActive);
  };

  return (
    <div>
      <button
        onClick={handleClickForm}
        className="md:w-11/12 md:p-1 md:pl-2 md:ml-3 md:mt-2 md:mb-2 text-color-card flex p-1 mt-2  justify-center bg-gray-800 border rounded-lg border-gray-300 w-full "
      >
        <span className="text-sm ">New Character</span>
      </button>
      <div
        className={
          windowActive
            ? "block md:mr-88  md:mt-1 md:fixed md:right-8 md:h-44 md:w-80 md:shadow-sm md:z-10 bg-white  text-color-card"
            : "md:hidden block bg-white text-color-card w-full"
        }
      >
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
          <label className="ml-4 block text-color-card"> Nombre </label>
          <input
            {...register("name", { required: true })}
            className="md:input md:w-11/12 w-full p-1 pl-2 md:ml-3 md:mt-2 md:mb-2 border border-solid border-gray-300 rounded-lg"
            type="text"
            placeholder="Nombre del personaje"
            name="name"
          ></input>
          <span className="flex justify-between text-red-500 ml-1 ">
            {errors.name?.type === "required" && "Name is required"}
          </span>
          <label className="ml-4 block text-color-card"> Altura </label>
          <input
            {...register("height", { required: true })}
            className="md:input   md:w-11/12 w-full md:ml-3 md:mt-2 md:mb-2 p-1 mb-2 border border-solid  border-gray-300 rounded-lg"
            type="text"
            placeholder="Altura del personaje"
            name="height"
          ></input>
          <span className="text-red-500 ml-1">
            {errors.height?.type === "required" && "Height is required"}
          </span>
          <label className="ml-4 block text-color-card"> Año </label>
          <input
            {...register("birth_year", { required: true })}
            className="md:input   md:w-11/12 w-full md:ml-3 md:mt-2 md:mb-2 p-1 mb-2 border border-solid  border-gray-300 rounded-lg"
            type="text"
            placeholder="Año de nacimiento"
            name="birth_year"
          ></input>
          <span className="text-red-500 ml-1">
            {errors.birth_year?.type === "required" && "birth year is required"}
          </span>
          <button className="md:w-11/12 md:p-1 md:ml-3 md:mt-2 md:mb-2 text-color-card flex p-1 mt-2  justify-center bg-blue-500 rounded-lg w-full">
            Añadir
          </button>
        </form>
        <button
          onClick={handleClickForm}
          className="md:w-11/12 md:p-1 md:ml-3 md:mt-2 md:mb-2 text-color-card flex p-1 mt-2  justify-center bg-red-500 rounded-lg w-full"
        >
          cerrar
        </button>
      </div>
    </div>
  );
};

export default NewCharacterForm;
