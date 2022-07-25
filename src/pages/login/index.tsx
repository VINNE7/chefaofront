import { LoginStyled } from './style.login'


export default function Login() {
  return (
    <>
      <LoginStyled>

        <img src=''alt="Futura Logo" />
        <h1>Login</h1>
        <form >
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" required placeholder='your best email' />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required placeholder='please enter your password'/>
          </div>
          <div className="btnCentralizar">
            <div className='actions'>
              <button>Signin</button>
            </div>
          </div>
          <div className="btnCentralizar--register">
            <h5>Não é usuário?</h5>
            <div className='actions--register'>

            </div>
          </div>
        </form>
      </LoginStyled>
    </>
  )
}