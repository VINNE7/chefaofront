import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { segmentsArray } from "./data";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
  segment: string;
};

export default function Signup() {
  const { register, handleSubmit, formState:{errors}, watch } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data ));

  return (
    <div className="min-h-screen w-screen flex bg-semiwhite justify-center items-center flex-col ">
      <div className="min-h-screen min-w-[50%] flex items-center flex-col  bg-semiwhite ">
        <h1 className="raisinblack text-4xl leading-12 text-center font-bold w-4/5 mt-9 mb-6">
          Cadastro de Usuário
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full m-0 bg-semiwhite px-8 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label className="leading-6 text-left raisinblack text-base font-bold">
              Nome
            </label>
            <div className="">
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                placeholder="Digite seu nome"
                type="text"
                required
                {...register("name", {required: true})}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="leading-6 text-left raisinblack text-base font-bold"
              htmlFor="email"
            >
              E-mail
            </label>
            <div className="relative ">
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                placeholder="Digite seu e-mail"
                required
                type="email"
                {...register("email")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="leading-6 text-left raisinblack text-base font-bold"
              htmlFor="password"
            >
              Segmento
            </label>
            <div className="relative ">
              <select
                id=""
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                required
                {...register("segment")}
                >
                  {segmentsArray.map(({value, label}, i)=>(<option key={i+"-segment"} value={value}>{label}</option>))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="leading-6 text-left raisinblack text-base font-bold"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative ">
              <input
                type="password"
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2  text-sm"
                placeholder="Digite sua senha"
                required
                {...register("password", {
                  minLength: {
                  value: 8,
                  message: "As senhas devem ter no mínimo oito caracteres"
                }} )}
              />
              {errors.password && <p className="mt-1 text-red-600 text-sm">⚠ {errors.password.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="leading-6 text-left raisinblack text-base font-bold"
              htmlFor="password"
            >
              Confirmar Senha
            </label>
            <div className="">
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2  text-sm"
                placeholder="Confirme sua senha"
                type="password"
                required
                {...register("confirmedPassword", {
                  validate: value => value === watch("password") || "As senhas devem ser iguais"})}
              />
              {errors.confirmedPassword && <p className="mt-1 text-red-600 text-sm">⚠ {errors.confirmedPassword.message}</p>}
            </div>
          </div>
          <div className="text-center raisinblack text-base font-bold flex-row flex justify-between lg:justify-evenly">
            <Link to={"/login"} 
              className="formButtonBack"
            >
              Voltar
            </Link>           
            <input type="submit" className="formButtonForward hover:cursor-pointer" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
}