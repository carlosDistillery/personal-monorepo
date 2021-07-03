import React from 'react'
import { AuthService } from '../../services/AuthService'

interface Props {
  authService: AuthService
}

interface LoginState {
  userName: string
  password: string
  loginAttempted: boolean
  loginSuccesfull: boolean
}

interface CustomEvent {
  target: HTMLInputElement
}

function LoginF(props: Props) {
  const [state, setState] = React.useState<LoginState>({
    userName: '',
    password: '',
    loginAttempted: false,
    loginSuccesfull: false,
  })
  let loginMessage: any

  const setUserName = (event: CustomEvent) => {
    setState((prevState) => {
      return { ...prevState, userName: event.target.value }
    })
  }

  const setPassword = (event: CustomEvent) => {
    setState((prevState) => {
      return { ...prevState, password: event.target.value }
    })
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setState((prevState) => {
      return { ...prevState, loginAttempted: true }
    })

    const result = await props.authService.login(state.userName, state.password)

    if (result) {
      console.log('result', result)
      setState((prevState) => {
        return { ...prevState, loginSuccesfull: true }
      })
    } else {
      console.log('wrong login')
      setState((prevState) => {
        return { ...prevState, loginSuccesfull: false }
      })
    }
  }

  if (state.loginAttempted) {
    if (state.loginSuccesfull) {
      loginMessage = <label>Login successfull</label>
    } else {
      loginMessage = <label>Login failed</label>
    }
  }

  return (
    <div>
      <h2>Pleas login</h2>
      {/* No es necesario el binding de la function, es una de las ventajas. */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          value={state.userName}
          name="username"
          id="username"
          onChange={(event) => setUserName(event)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={state.password}
          id="password"
          onChange={(event) => setPassword(event)}
        />
        <button type="submit">Login</button>
      </form>

      {loginMessage}
    </div>
  )
}

export { LoginF }
