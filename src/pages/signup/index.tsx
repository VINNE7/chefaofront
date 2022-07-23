import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "../../components/button";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Signup() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data));

  return (
    <>
      <div className="min-h-screen min-w-full flex justify-center items-center flex-col  bg-slate-800">
        <h1 className="text-white text-4xl text-center font-bold">
          Cadastro de Usuário
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 m-0 bg-slate-800 p-3 "
        >
          <div className="input-field">
            <label className="leading-3 text-left text-white text-sm font-extralight">
              Nome Completo
            </label>
            <div className="relative ">
              <i className="fa fa-user absolute top-1/2 -translate-y-1/2 right-2" />
              <input
                className="block box-border w-full rounded border-solid border-1 border-white py-2 pl-4 pr-6 mb-3  text-sm"
                {...register("firstName")}
              />
            </div>
          </div>

          <div>
            <label
              className="leading-3 text-left block mb-3 mt-5 text-white text-sm font-extralight"
              htmlFor="email"
            >
              E-mail
            </label>
            <div className="relative ">
              <i className="fa fa-envelope absolute top-1/2 -translate-y-1/2 right-2" />
              <input
                className="block box-border w-full rounded border-solid border-1 border-white py-2 pl-4 pr-6 mb-3  text-sm"
                {...register("firstName")}
              />
            </div>
          </div>

          <div>
            <label
              className="leading-3 text-left block mb-3 mt-5 text-white text-sm font-extralight"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative ">
              <i className="fa fa-key absolute top-1/2 -translate-y-1/2 right-2" />
              <input
                className="block box-border w-full rounded border-solid border-1 border-white py-2 pl-4 pr-6 mb-3  text-sm"
                {...register("firstName")}
              />
            </div>
          </div>

          <div className="input-field">
            <label
              className="leading-3 text-left block mb-3 mt-5 text-white text-sm font-extralight"
              htmlFor="password"
            >
              Confirmar Senha
            </label>
            <div className="relative ">
              <i className="fa fa-key absolute top-1/2 -translate-y-1/2 right-2" />
              <input
                className="block box-border w-full rounded border-solid border-1 border-white py-2 pl-4 pr-6 mb-3  text-sm"
                {...register("firstName")}
              />
            </div>
          </div>
        </form>
        <FormButton buttonLabel="Enviar" />
      </div>
    </>
  );
}
