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
    email: "",
    password: "",
  });

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

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

          <div className='text-center'>
            <button type="submit"
              className="box-border border-2 border-cyberyellow py-2 px-4 text-[sm] rounded-[10px] w-[230px] items-center text-raisinblack txt font-bold"
            >Entrar
            </button>
            <div className='p-10  flex flex-col justify-center items-center'>
              <span className='font-bold font-xl mb-8 text-raisinblack text-base' >

                Ainda não possui uma conta?
              </span>
              <Link
                to={"/signup"}
                className="formButtonBack font-bold text-raisinblack text-base"
              >
                <span>Cadastrar</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    
  );
}