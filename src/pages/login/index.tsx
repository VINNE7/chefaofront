import { FormEvent, useCallback, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthLogin/AuthContext';
import { IFormInputs } from '../../types';
import Logo from '../../assets/images/logo.png';
import Loading from '../../components/Loading';

export default function Login() {
  const [formData, setFormData] = useState<IFormInputs>({
    email: '',
    senha: '',
  });

  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault()
    const { email, senha } = formData;
    setLoading(true)
    const isLogged = await auth.signin(email, senha)
    if (email && senha) {
      if (isLogged) {
        setLoading(false);
        navigate('/');
        return true;
      }
      return false;
    }
  }, [formData , loading, setLoading]);

  return (
    <>
      <div className="min-h-[110vh] flex justify-center items-center flex-col bg-semiwhite md:flex-row">
        <div className='m-10'>
          <img src={Logo} alt="Logo" width={450} height={380} />
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="w-screen max-w-[540px] m-0 p-5"
        >
          <h1 className="text-oxfordblue text-4xl text-center font-bold mb-8">
            Entrar na Conta
          </h1>
          <div className='mb-5'>
            <label
              className="text-left font-bold text-raisinblack text-base"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              type='email' name='email' id='email' required placeholder='Digite seu email' autoComplete='current-email'
              className="block box-border w-full rounded-[5px] border border-royalblue py-2 pl-4 pr-6 mb-3  text-sm"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              className="w-full rounded-[5px] border border-royalblue py-2 pl-4 pr-6 mb-5 text-sm"
              onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
            />
          </div>
          <div className='pb-5 text-center  text-red-700'>
          {loading ? <Loading /> : false}
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
              <Link to={'/signup'}
                className='bg-cyberyellow  py-3 px-4 text-[sm] rounded-[10px] w-[230px] items-center text-raisinblack txt font-bold '
              >
                <><span>
                  Registre-se
                </span>
                </>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}