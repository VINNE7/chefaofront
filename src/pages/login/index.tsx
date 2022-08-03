import { FormEvent, useCallback, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthLogin/AuthContext';
import { IFormInputs } from '../../types';
import Logo from '../../assets/images/logo.png';

export default function Login() {

  const [formData, setFormData] = useState<IFormInputs>({
    email: '',
    senha: '',
  });

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault()
    const { email, senha } = formData;
    const isLogged = await auth.signin(email, senha)
    if (email && senha) {
      if (isLogged) {
        navigate('/');
        return true;
      }
      return false
    }
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
                type='email' name='email' id='email' required placeholder='Seu melhor email ;)' autoComplete='current-email'
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
                type='password' placeholder='Digite sua senha' id='password' autoComplete='current-password' required minLength={8}
                className="w-full rounded-[5px] border border-royalblue py-2 pl-4 pr-6 mb-7  text-sm"
                onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
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