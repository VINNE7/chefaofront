import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";


type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function Cadastro() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data));

  return (
    <>
      <div className="min-h-screen w-screen flex justify-center items-center flex-col  bg-slate-800">
        <h1 className="text-white text-4xl text-center font-bold">Cadastro de Usuário</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 m-0 bg-slate-800 p-3 "
        >
          <div className="">
            <label className="leading-3 text-left block mb-3 mt-5 text-white text-sm font-extralight">
              Nome Completo
            </label>
            <input
              className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
              {...register("firstName")}/>
          </div>

          <div>
            <label
              className="leading-3 text-left block mb-3 mt-5 text-white text-sm font-extralight"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
              {...register("lastName")}
            />
          </div>

          <div>
            <label
              className="leading-3 text-left block mb-3 mt-5 text-white text-sm font-extralight"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
              type="email"
              {...register("email")}
            />
          </div>

          <div>
            <label
              className="leading-3 text-left block mb-3 mt-5 text-white text-sm font-extralight"
              htmlFor="password"
            >
              Confirmar Senha
            </label>
            <input
              className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-8 text-sm"
              type="email"
              {...register("email")}
            />
          </div>
        </form>
        <input
          className="flex box-border rounded border-solid border-2 border-white py-2 px-4 text-sm text-white w-1/3 items-center justify-center text-center"
          type="submit"
        />
      </div>
    </>
  );
}
