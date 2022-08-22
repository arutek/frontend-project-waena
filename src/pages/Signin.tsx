import imgLogin from '@/assets/images/login.png'
import { useNavigate } from '@solidjs/router'
import { createSignal, Match, Switch } from 'solid-js'
import auth from '../libraries/auth'

export default () => {
  let usernameInput
  let emailInput
  let passwordInput
  let confPassInput
  const navigate = useNavigate()
  const [username, setUsername] = createSignal('')
  const [email, setEmail] = createSignal('')
  const [password, setPassword] = createSignal('')
  const [confPass, setConfPass] = createSignal('')
  const [authType, setAuthType] = createSignal('signup')
  const signin = async () => {
    try {
      const payload = {
        email: email(),
        password: password(),
      }
      const res = await auth.signin(payload)
      if (res.errors) throw res
      navigate('/', {replace: true})
    } catch (err) {
      console.error(err.errors[0])
    }
  }
  const signup = async () => {
    try {
      const payload = {
        username: username(),
        email: email(),
        password: password(),
        confPass: confPass(),
      }
      const res = await auth.signup(payload)
      if (res.errors) throw res
      setAuthType('signin')
    } catch (err) {
      console.error(err.errors[0])
    }
  }

  return (
    <main class='max-w-3xl mx-auto'>
      <section class='flex flex-col items-center my-8 mx-40'>
        <div>
          <div>
            <img src={imgLogin} class='h-60' />
          </div>
        </div>
        <div class='my-4 text-center'>
          <h5 class='my-4 font-bold text-black'>Fast, Efficient and Productive</h5>
          <p class='text-1sm'>
            In this kind of post, the blogger introduces a person they\’ve interviewed
            and provides some background information about the interviewee and their
            work following this is a transcript of the interview.
          </p>
        </div>
        <div class='text-center p-4 bg-white w-full rounded-lg'>
          <Switch>
            <Match when={authType() === 'signin'}>
              <h5 class='font-bold text-black'>Sign In</h5>
              <div class='py-4 text-1sm'>
                <input type='text' onKeyUp={() => setEmail(emailInput.value)} ref={emailInput} id="email-field" class='input mb-8 w-full' placeholder='Email' />
                <input type='password' onKeyUp={() => setPassword(passwordInput.value)} ref={passwordInput} id="password-field" class='input mb-8 w-full' placeholder='Password' />
                <button onClick={() => signin()} class='button btn-primary w-full' >Sign In</button>
              </div>
              <p class='text-1sm'>Not a Member yet? <a onClick={() => setAuthType('signup')} class='text-sky-500 cursor-pointer'>Sign up</a></p>
            </Match>
            <Match when={authType() === 'signup'}>
              <h5 class='font-bold text-black'>Sign Up</h5>
              <div class='py-4 text-1sm'>
                <input type='text' onKeyUp={() => setUsername(usernameInput.value)} ref={usernameInput} id="username-field" class='input mb-8 w-full' placeholder='Username' />
                <input type='text' onKeyUp={() => setEmail(emailInput.value)} ref={emailInput} id="email-field" class='input mb-8 w-full' placeholder='Email' />
                <input type='password' onKeyUp={() => setPassword(passwordInput.value)} ref={passwordInput} id="password-field" class='input mb-8 w-full' placeholder='Password' />
                <input type='password' onKeyUp={() => setConfPass(confPassInput.value)} ref={confPassInput} id="conf-pass-field" class='input mb-8 w-full' placeholder='Confirm Password' />
                <button onClick={() => signup()} class='button btn-primary w-full' >Sign Up</button>
              </div>
              <p class='text-1sm'>Already registered? <a onClick={() => setAuthType('signin')} class='text-sky-500 cursor-pointer'>Sign in</a></p>
            </Match>
          </Switch>
        </div>
      </section>
    </main>
  )
}