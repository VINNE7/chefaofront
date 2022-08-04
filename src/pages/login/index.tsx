import { FormEvent, useCallback, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthLogin/AuthContext';
import { IFormInputs } from '../../types';

import Logo from '../../assets/images/logo.png';
import Loading from '../../components/Loading';

import { FormEvent, useCallback, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthLogin/AuthContext";

import api from "../../services/api";
import Logo from "../../assets/images/logo.png";

interface IFormInputs {
  email: string;
  password: string;
}


export default function Login() {
  const [formData, setFormData] = useState<IFormInputs>({
    email: '',
    senha: '',
    email: "",
    password: "",
  });
  // const [loading, setLoading ] = useState(false)
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = useCallback(async (event: FormEvent) => {

    event.preventDefault()
    const { email, senha } = formData;
    const isLogged = await auth.signin(email, senha)
    if (email && senha) {
      if (isLogged) {
        // setLoading(true);
        navigate('/');
        return true;
      }
      return false
    }
  }, [formData]);

  return (
    <>
      <div className="min-h-[110vh] flex justify-center items-center flex-col bg-semiwhite md:flex-row">
        <div className='m-10'>
          <img src={Logo} alt="Logo" width={450} height={350} />
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="w-screen max-w-[530px] m-0 p-5"
        >
          <h1 className="text-oxfordblue text-4xl text-center font-bold mb-8">
            Entrar na Conta
          </h1>
          <div>
            <label
              className="text-left font-bold text-raisinblack text-base"
  const handleFormSubmit = useCallback(
    async (event: FormEvent) => {
      const { email, password } = formData;

      if (email && password) {
        const isLogged = await auth.signin(email, password);
        if (isLogged) {
          navigate("/");
        } else {
          alert("Email ou senha incorreto.");
        }
      }

      const data = {
        email,
        password,
      };
      await api.post("/api/login", data);
      console.log(data);
    },
    [formData]
  );

  return (
    
      <div className="min-h-screen  w-screen flex bg-semiwhite justify-center items-center flex-col">
        <div className="mb-8">
          <img src={Logo} alt="Logo" width={288} height={221} />
        </div>
        <form onSubmit={handleFormSubmit} className="w-screen px-8">
          <h1 className="text-oxfordblue text-[32px] text-center font-bold mb-[24px]">
            Entrar na Conta
          </h1>

          <div className="">
            <label
              className="text-left font-bold text-raisinblack text-base "
              htmlFor="email"
            >
              E-mail
            </label>
              <input
                type='email' name='email' id='email' required placeholder='Digite seu email' autoComplete='current-email'
                className="block box-border w-full rounded-[5px] border border-royalblue py-2 pl-4 pr-6 mb-3  text-sm"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            <input
              type="email"
              required
              placeholder="Digite seu e-mail"
              id="email"
              className="box-border w-full rounded-[5px] border border-royalblue py-2 pl-2 pr-2 mb-3  text-sm"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label
              className="text-left font-bold text-raisinblack text-base"
              htmlFor="password"
            >
              Senha
            </label>
              <input
                type='password' placeholder='Digite sua senha' id='password' autoComplete='current-password' required minLength={8}
                className="w-full rounded-[5px] border border-royalblue py-2 pl-4 pr-6 mb-10 text-sm"
                onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
              />
            <input
              type="password"
              required
              placeholder="Digite sua senha"
              id="password"
              autoComplete="current-password"
              className="w-full rounded-[5px] border border-royalblue py-2 pl-2 pr-2 mb-6 text-sm"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="formButtonForward font-bold text-raisinblack text-base mb-4"
            >
              Entrar
            </button>

            <div className=" flex flex-col justify-center items-center">
              <span className="font-bold font-base mb-4">
                Ainda não possui uma conta?
              </span>
              <Link
                to={"/signup"}
                className="formButtonBack font-bold text-raisinblack text-base"
              >
                <>
                <span>
                  Registre-se
                </span>
                </>
                <span>Cadastrar</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
  );
}
