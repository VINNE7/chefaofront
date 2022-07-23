import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

import api from '../../services/api'

import LinkComponent from '../../components/Link';
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


  // const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // }, []);

  const handleFormSubmit = useCallback(async (event: FormEvent) => {
    const { email, password } = formData;

    const data = {
      email,
      password
    };

    await api.post('rota do back', data)
  }, [formData]);

  return (
    <>
      <div className="h-[100vh] flex justify-center items-center flex-col bg-stone-100">
        <div className='m-5'>
          <img src={Logo} alt="Logo"
          />
        </div>
        <h1 className="text- #0B1B34 text-4xl text-center font-bold">
          Entrar na Conta
        </h1>
        <form
          onSubmit={handleFormSubmit}
          className="w-screen max-w-[480px] m-0 p-3 "
        >

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
                className="block box-border w-full rounded border border-stone-700 py-2 pl-4 pr-6 mb-3  text-sm"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
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
              <i className="fa fa-key absolute top-1/2 -translate-y-1/2 right-2" />
              <input
                type='password' required placeholder='Digite sua senha' id='password'
                className="w-full border border-stone-700 py-2 pl-4 pr-6 mb-3  text-sm"
                onChange={(e) => setFormData({ ...formData, password: e.target.value})}
              />
            </div>
          </div>
          <div className='text-center mt-16'>
            <button type="submit"
              className="box-border border-2 border-black py-2 px-4 text-sm text-#24252E rounded w-1/4 items-center justify-center text-center"
            >Entrar
            </button>

            <div className=' border-t border-stone-700 p-10 mt-7'>
              <LinkComponent redirect={'/signup'}
              >
                <><span>
                  Registre-se
                </span></>
              </LinkComponent>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}