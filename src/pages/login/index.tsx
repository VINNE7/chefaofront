import { FormEvent, useCallback, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth/AuthLogin/AuthContext';

import api from '../../services/api'
import Logo from '../../assets/images/logo.png'



interface IFormInputs {
  email: string;
  password: string;
};

export default function Login() {

  const [formData, setFormData] = useState<IFormInputs>({
    email: '',
    password: '',
  });

  const auth = useContext(AuthContext);
  const navigate = useNavigate()


  const handleFormSubmit = useCallback(async (event: FormEvent) => {
    const { email, password } = formData;

    if (email && password) {
      const isLogged = await auth.signin(email, password)
      if (isLogged) {
        navigate('/')
      } else {
        alert('Email ou senha incorreto.')
      }
    }

    const data = {
      email,
      password
    };
    await api.post('/api/login', data)
    console.log(data);

  }, [formData]);


  return (
    <>
      <div className="min-h-[100vh] flex justify-center items-center flex-col bg-stone-100 md:flex-row">
        <div className='m-16'>
          <img src={Logo} alt="Logo" width={440} height={383} />
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="w-screen max-w-[480px] m-0 p-3 "
        >
        <h1 className="text-oxfordblue text-4xl text-center font-bold">
          Entrar na Conta
        </h1>

          <div>
            <label
              className="leading-3 text-left block mb-3 mt-5 text-black text-sm font-extralight"
              htmlFor="email"
            >
              E-mail
            </label>
            <div className="relative ">
              <i className="fa fa-envelope absolute top-1/2 -translate-y-1/2 right-2" />
              <input
                type='email' required placeholder='Seu melhor email ;)' id='email'
                className="block box-border w-full rounded-[5px] border border-royalblue py-2 pl-4 pr-6 mb-3  text-sm"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label
              className="leading-3 text-left block mb-3 mt-5 text-black text-sm font-extralight"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative ">
              <i className="fa fa-key absolute top-1/4 -translate-y-1/2 right-2" />
              <input
                type='password' required placeholder='Digite sua senha' id='password' autoComplete='current-password'
                className="w-full rounded-[5px] border border-royalblue py-2 pl-4 pr-6 mb-7  text-sm"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>
          <div className='text-center'>
            <button type="submit"
              className="box-border border-2 border-cyberyellow py-2 px-4 text-[sm] rounded-[10px] w-[230px] items-center text-raisinblack txt font-bold"
            >Entrar
            </button>

            <div className='p-10  flex flex-col justify-center items-center'>
              <span className='font-bold font-xl mb-8' >
                Ainda não possui uma conta?
              </span>
              <Link to={'/signup'}
                className='bg-cyberyellow  py-3 px-4 text-[sm] rounded-[10px] w-[230px] items-center text-raisinblack txt font-bold '
              >
                <><span>
                  Registre-se
                </span></>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}